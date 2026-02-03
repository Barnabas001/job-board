import AuthContext from "./AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  const loginJobSeeker = () =>
    setUser({ role: "jobseeker", name: "Job Seeker" });

  const loginRecruiter = () =>
    setUser({ role: "recruiter", name: "Recruiter" });

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, loginJobSeeker, loginRecruiter, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
