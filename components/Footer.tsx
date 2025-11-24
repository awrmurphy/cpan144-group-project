export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <div className="mt-auto">
      <p className="text-gray-500">
        Copyright © {current_year}, Anthony Murphy, Adebisi Oyewole, Attah
        Attah, Hiryti Mebrahtu, Turner Cortese. All Rights Reserved.
      </p>
    </div>
  );
}
