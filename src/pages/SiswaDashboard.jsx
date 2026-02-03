import Navbar from "../components/Navbar";

export default function SiswaDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar title="Dashboard Siswa" />

      <div style={styles.container}>
        <h1>Dashboard Siswa</h1>

        <p>
          Halo, <strong>{user?.name}</strong>
        </p>

        <div style={styles.info}>
          <p>Role: {user?.role}</p>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "30px",
    minHeight: "100vh",
    background: "#f1f5f9",
  },
  info: {
    marginTop: "20px",
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    width: "250px",
  },
};
