export default function Footer() {
  return (
    <div className="bg-black p-6 flex justify-center align-center">
      <div className="font-mono text-white">© {new Date().getFullYear()} React-Fit</div>
    </div>
  );
}
