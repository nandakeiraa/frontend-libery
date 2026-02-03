import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar title="Dashboard Admin" />

      <div style={styles.container}>
        <h2>Selamat Datang, {user?.name}</h2>
        <p style={styles.role}>Role: {user?.role}</p>

        {/* STATISTIK */}
        <div style={styles.stats}>
          <div style={styles.statCard}>
            <h3>📚 Total Buku</h3>
            <p>120</p>
          </div>

          <div style={styles.statCard}>
            <h3>👥 Total Siswa</h3>
            <p>45</p>
          </div>

          <div style={styles.statCard}>
            <h3>📖 Dipinjam</h3>
            <p>30</p>
          </div>
        </div>

        {/* MENU ADMIN */}
        <h3 style={{ marginTop: "40px" }}>Menu Admin</h3>

        <div style={styles.menu}>
          <div style={styles.menuCard}>
            <h4>📚 Kelola Buku</h4>
            <p>Tambah, edit, dan hapus buku</p>
          </div>

          <div style={styles.menuCard}>
            <h4>👥 Data Siswa</h4>
            <p>Lihat daftar siswa</p>
          </div>

          <div style={styles.menuCard}>
            <h4>📊 Laporan</h4>
            <p>Laporan peminjaman buku</p>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#f1f5f9",
    minHeight: "100vh",
  },
  role: {
    color: "#475569",
    marginBottom: "30px",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },
  statCard: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    fontSize: "18px",
    fontWeight: "bold",
  },
  menu: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  menuCard: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
};
