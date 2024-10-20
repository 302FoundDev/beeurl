import { useProfile } from "../components/hooks/useProfile"

export const Profile = () => {

  const { user, isLoading } = useProfile()

  return (
    <section>
      <div>
        <div>
          <h2>Profile page</h2>
        </div>
        <div>
          {isLoading && <p>Loading...</p>}
          {user && (
            <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>shortened url: `{}`</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
