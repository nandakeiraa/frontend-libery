export default function SiswaDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Dashboard Siswa</h1>
      <p>Halo, {user.name}</p>
    </div>
  );
}
