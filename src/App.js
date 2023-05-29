import React, { useState } from 'react';

function App() {
  const [nilaiMahasiswa, setNilaiMahasiswa] = useState({});
  const [outputJSON, setOutputJSON] = useState(null);

  const handleChangeNilai = (aspek, mahasiswa, nilai) => {
    setNilaiMahasiswa(prevState => ({
      ...prevState,
      [aspek]: {
        ...(prevState[aspek] || {}),
        [mahasiswa]: nilai
      }
    }));
  };

  const handleSimpan = () => {
    console.log(JSON.stringify(nilaiMahasiswa, null, 2));
    setOutputJSON(JSON.stringify(nilaiMahasiswa, null, 2));
  };

  const handleClearOutput = () => {
    setOutputJSON(null);
  };

return (
<>
  <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <h1 className="mt-4 mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Penilaian Mahasiswa</h1>

      <div className="border-b border-gray-900/10 pb-12">
        <table className="w-full">
        <thead>
          <tr>
            <th className="pr-2 pl-2"></th>
            <th className="pr-2 pl-2">Aspek Penilaian 1</th>
            <th className="pr-2 pl-2">Aspek Penilaian 5</th>
            <th className="pr-2 pl-2">Aspek Penilaian 3</th>
            <th className="pr-2 pl-2">Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(mahasiswa => (
            <tr key={mahasiswa}>
              <td className="py-2">Mahasiswa {mahasiswa}</td>
              {['aspek_penilaian_1', 'aspek_penilaian_2', 'aspek_penilaian_3', 'aspek_penilaian_4'].map(aspek => (
                <td key={aspek} className="py-2">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    onChange={e => handleChangeNilai(aspek, `mahasiswa_${mahasiswa}`, parseInt(e.target.value))}
                    className="w-16 border border-gray-300 rounded py-1 px-2"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={handleClearOutput} type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Ulangi
        </button>
        <button type="button"
          onClick={handleSimpan}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Simpan
        </button>
      </div>
       
    </div>
    <div className="text-left">
      {outputJSON && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Output JSON:</h2>
          <pre className="bg-gray-100 p-4 rounded">{outputJSON}</pre>
        </div>
      )}
    </div>
    
  </main>
  
</>
)
}

export default App;