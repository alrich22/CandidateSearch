import { useState, useEffect } from 'react';
import ICandidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<ICandidate[]>(
    () => JSON.parse(localStorage.getItem('savedCandidates') ?? '[]')
  )

  useEffect(() => {
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates))
  }, [savedCandidates])

  const handleReject = (username: string) => {
    console.log("- clicked");
    const newCandidates = savedCandidates.filter(candidate => candidate.username !== username);
    setSavedCandidates(newCandidates);
  }

  return (
    <>
      <h1>Candidates you have saved:</h1>
      { savedCandidates.length !== 0 ? (
        <>
          <div className="container">
            <table className="table table-striped table-dark table-bordered">
              <thead className="thead-dark">
                <tr className='text-center'>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Email</th>
                  <th scope="col">Company</th>
                  <th scope="col">Bio</th>
                  <th scope="col">Reject</th>
                </tr>
              </thead>
              <tbody>
                {savedCandidates.map((candidate) => (
                  <tr>
                    <td className="align-middle align-items-center justify-content-center text-center">
                      <img className="img-thumbnail img-fluid" src={candidate.avatarUrl}></img>
                    </td>
                    <td>
                      <p>{candidate.username}</p>
                      { candidate.name ? (
                          <p>({candidate.name})</p>
                        ) : null
                      }
                    </td>
                    <td>
                      { candidate.location ? (
                          <p>{candidate.location}</p>
                        ) : null
                      }
                    </td>
                    <td>
                      { candidate.email ? (
                          <a href={"mailto:" + candidate.email}>{candidate.email}</a>
                        ) : null
                      }
                    </td>
                    <td>
                      { candidate.company ? (
                          <p>{candidate.company}</p>
                        ) : null
                      }
                    </td>
                    <td>
                      { candidate.bio ? (
                          <p>{candidate.bio}</p>
                        ) : null
                      }
                    </td>
                    <td className="align-middle align-items-center justify-content-center text-center">
                      <button className="reject-btn" onClick={() => handleReject(candidate.username)}>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h3>No candidates available, try saving some!</h3>
      )}
    </>
  );
};

export default SavedCandidates;