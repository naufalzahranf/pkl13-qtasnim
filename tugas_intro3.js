//nomor 1
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
        let cek = dataDay.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error('Hari ini bukan hari kerja'));
        }
      }, 3000);
    });
  };
  
  // Menggunakan then dan catch
  cekHariKerja('senin')
    .then((result) => {
      console.log(`Hari kerja: ${result}`);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
  
  // Menggunakan try dan catch
  async function main() {
    try {
      const result = await cekHariKerja('rabu');
      console.log(`Hari kerja: ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  main();

  //nomor 2
  const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["January", "February", "Maret", "April", "Mel", "Juni", "Juli", "Agustus", "September", "Oktober", "November",
        "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }  
    }, 4000);
}
// Callback function untuk menampilkan semua bulan menggunakan method map
const displayMonths = (error, months) => {
    if (error) {
      console.error(error.message);
    } else {
      const monthAbbreviations = months.map((month, index) => {
        return `${index + 1}. ${month}`;
      });
      console.log(monthAbbreviations.join("\n"));
    }
  };
  
  // Panggil getMonth dengan callback displayMonths
  getMonth(displayMonths);
  
//nomor 3
const cekHariEkskul = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ['senin', 'selasa',];
        let cek = dataDay.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error('Hari ini bukan hari ekskul'));
        }
      }, 3000);
    });
  };
  
  // Menggunakan then dan catch
  cekHariEkskul('senin')
    .then((result) => {
      console.log(`Hari ekskul: ${result}`);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
  
  // Menggunakan try dan catch
  async function main() {
    try {
      const result = await cekHariEkskul('selasa');
      console.log(`Hari ekskul: ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  main();

  //nomor 3 (contoh2)
  const cekSeragamSekolah = (seragam) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataSeragam = ['putih abu', 'batik', 'pramuka', 'pangsi', 'baju muslim'];
        let cek = dataSeragam.find((item) => {
          return item === seragam;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error('hari ini tidak memakai seragam'));
        }
      }, 3000);
    });
  };
  
  // Menggunakan then dan catch
  cekSeragamSekolah('putih abu')
    .then((result) => {
      console.log(`Seragam dipakai: ${result}`);
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
    });
  
  // Menggunakan try dan catch
  async function main() {
    try {
      const result = await cekSeragamSekolah('pramuka');
      console.log(`Seragam dipakai: ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  main();

//nomor 4
// Menggunakan fetch untuk mengambil data dari REST API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Terjadi kesalahan saat mengambil data.');
    }
    return response.json();
  })
  .then(data => {
    // Mengambil semua nama (name) dari data
    const names = data.map(user => user.name);
    
    // Menampilkan semua nama di konsol
    console.log(names);
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });

  