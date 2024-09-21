    // 1
    // data anak
    const anakData = [
      { id: 1, root: 0, fullname: 'Moh. Romli', nickname: 'Romli', father: 'H. Nur', mother: 'Genuk', seq: 1, gender: 'Laki-laki', born: '1928', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 2, root: 0, fullname: 'Siti Aminah', nickname: 'Ti', father: 'H. Nur', mother: 'Genuk', seq: 2, gender: 'Perempuan', born: '1931', dead: '-', partner: 'Moh. Kusnun', partnerborn: '1924', partnerdead: '-', child: '8' },
      { id: 3, root: 0, fullname: 'Kholiyah', nickname: 'Yah', father: 'H. Nur', mother: 'Genuk', seq: 3, gender: 'Perempuan', born: '1934', dead: '-', partner: 'Abd. Mu`thi', partnerborn: '1925', partnerdead: '-', child: '3' },
      { id: 4, root: 0, fullname: 'Marsinah', nickname: 'Mar', father: 'H. Nur', mother: 'Genuk', seq: 4, gender: 'Perempuan', born: '1937', dead: '-', partner: 'Abd. Shomad', partnerborn: '1927', partnerdead: '-', child: '8' },
      { id: 5, root: 0, fullname: 'Marzuqi', nickname: '-', father: 'H. Nur', mother: 'Genuk', seq: 5, gender: 'Laki-Laki', born: '1940', dead: '1940', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 6, root: 0, fullname: 'Siti Khotijah', nickname: 'Is', father: 'H. Nur', mother: 'Genuk', seq: 6, gender: 'Perempuan', born: '1944', dead: '-', partner: 'Mas`ud Sufyan', partnerborn: '1929', partnerdead: '-', child: '2' },
      { id: 7, root: 0, fullname: 'M. Syahri', nickname: 'Ri', father: 'H. Nur', mother: 'Genuk', seq: 7, gender: 'Laki-laki', born: '1945', dead: '-', partner: 'Siti Syamsiyah', partnerborn: '1955', partnerdead: '-', child: '3' },
      { id: 8, root: 0, fullname: 'M. Bashoni', nickname: 'Bas', father: 'H. Nur', mother: 'Genuk', seq: 8, gender: 'Laki-laki', born: '1949', dead: '-', partner: 'Umi Maisaroh', partnerborn: '1959', partnerdead: '-', child: '6' }
    ];

    // 2
    // data putu
    const putuData = [
      { id: 1, root: 2, fullname: 'Siti Sapurah', nickname: 'Sapur', seq: 1, gender: 'Perempuan', born: '1951', dead: '-', partner: 'Muh Yadi', partnerborn: '1946', partnerdead: '-', child: '3' },
      { id: 2, root: 2, fullname: 'Samuji', nickname: 'Samuji', seq: 2, gender: 'Laki-laki', born: '1954', dead: '-', partner: 'Umi Aiman', partnerborn: '1960', partnerdead: '-', child: '3' },
      { id: 3, root: 2, fullname: 'Imam Safi`i', nickname: '-', seq: 3, gender: 'Laki-laki', born: '1956', dead: '1957', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 4, root: 2, fullname: 'Shodiqun', nickname: 'Shodiqun', seq: 4, gender: 'Laki-laki', born: '1958', dead: '-', partner: 'Siti Nurjannah', partnerborn: '1962', partnerdead: '-', child: '2' },
      { id: 5, root: 2, fullname: 'Moh. Makin', nickname: 'Makin', seq: 5, gender: 'Laki-laki', born: '1960', dead: '-', partner: 'Masfufah', partnerborn: '1971', partnerdead: '-', child: '3' },
      { id: 6, root: 2, fullname: 'M. Salam', nickname: 'Salam', seq: 6, gender: 'Laki-laki', born: '1963', dead: '-', partner: 'Ngatun', partnerborn: '1970', partnerdead: '-', child: '-' },
      { id: 7, root: 2, fullname: 'Islamudin', nickname: 'Islamudin', seq: 7, gender: 'Laki-laki', born: '1965', dead: '-', partner: 'Sriyani', partnerborn: '1968', partnerdead: '-', child: '2' },
      { id: 8, root: 2, fullname: 'Ihsanuddin', nickname: 'Ihsan', seq: 8, gender: 'Laki-laki', born: '1974', dead: '-', partner: 'Rina Rahmawati', partnerborn: '1978', partnerdead: '-', child: '2' },
      { id: 9, root: 3, fullname: 'Syahrowardi', nickname: 'Syahro', seq: 1, gender: 'Laki-laki', born: '1964', dead: '-', partner: 'Ulik Anuroh', partnerborn: '-', partnerdead: '-', child: '1' },
      { id: 10, root: 3, fullname: 'Badi`ah', nickname: 'Badi`', seq: 2, gender: 'Perempuan', born: '1971', dead: '-', partner: 'Masrukin', partnerborn: '-', partnerdead: '-', child: '4' },
      { id: 11, root: 3, fullname: 'Zarnuji', nickname: 'Jar', seq: 3, gender: 'Laki-laki', born: '1974', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 12, root: 4, fullname: 'Moh. Ma`arif', nickname: 'Moh/Arif', seq: 1, gender: 'Laki-laki', born: '1958', dead: '-', partner: 'Qodriyah', partnerborn: '1966', partnerdead: '-', child: '3' },
      { id: 13, root: 4, fullname: 'Jamzuri', nickname: 'Zuri', seq: 2, gender: 'Laki-laki', born: '1961', dead: '2016', partner: 'Muti`atul Afifah', partnerborn: '1965', partnerdead: '-', child: '3' },
      { id: 14, root: 4, fullname: 'Umi Hanik', nickname: 'Nik', seq: 3, gender: 'Perempuan', born: '1963', dead: '-', partner: 'Moh. Munir', partnerborn: '1955', partnerdead: '-', child: '2' },
      { id: 15, root: 4, fullname: 'Sholihatin', nickname: 'Kah', seq: 4, gender: 'Perempuan', born: '1965', dead: '-', partner: 'Moh. Shofwan', partnerborn: '1965', partnerdead: '-', child: '3' },
      { id: 16, root: 4, fullname: 'M. Tamyiz', nickname: 'Tamyiz', seq: 5, gender: 'Laki-laki', born: '1968', dead: '2008', partner: 'Siti Umi Rohmah', partnerborn: '1974', partnerdead: '-', child: '2' },
      { id: 17, root: 4, fullname: 'Maskub', nickname: 'Maskub', seq: 6, gender: 'Laki-laki', born: '1968', dead: '-', partner: 'Latifatul Mukhoyyaroh', partnerborn: '1975', partnerdead: '-', child: '3' },
      { id: 18, root: 4, fullname: 'Indasah', nickname: 'In', seq: 7, gender: 'Perempuan', born: '1973', dead: '-', partner: 'Imam Mutamim', partnerborn: '1962', partnerdead: '-', child: '2' },
      { id: 19, root: 4, fullname: 'Isnaniyah', nickname: 'Is', seq: 8, gender: 'Perempuan', born: '1975', dead: '-', partner: 'Moh. Ridwan', partnerborn: '1970', partnerdead: '-', child: '2' },
      { id: 20, root: 6, fullname: 'Husnul Hayati', nickname: '-', seq: 1, gender: 'Perempuan', born: '1959', dead: '-', partner: 'Kholiq Sumadi', partnerborn: '1958', partnerdead: '-', child: '2' },
      { id: 21, root: 6, fullname: 'Husnul Hidayati', nickname: '-', seq: 2, gender: 'Perempuan', born: '1961', dead: '-', partner: 'Thohari', partnerborn: '1955', partnerdead: '-', child: '4' },
      { id: 22, root: 7, fullname: 'Siti Mu`awanah', nickname: 'Anah', seq: 1, gender: 'Perempuan', born: '1973', dead: '-', partner: 'Humaidi', partnerborn: '1970', partnerdead: '-', child: '2' },
      { id: 23, root: 7, fullname: 'Imron Fauzi', nickname: 'Imron', seq: 2, gender: 'Laki-laki', born: '1978', dead: '-', partner: 'Mutikah', partnerborn: '1979', partnerdead: '-', child: '1' },
      { id: 24, root: 7, fullname: 'Kholil Mansur Masrukin', nickname: 'Kholil', seq: 3, gender: 'Laki-laki', born: '1983', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 25, root: 8, fullname: 'Agus Basuki Rohmat', nickname: 'Agus', seq: 1, gender: 'Laki-laki', born: '1975', dead: '-', partner: 'Wiwik Nugraini', partnerborn: '1983', partnerdead: '-', child: '1' },
      { id: 26, root: 8, fullname: 'Bambang Khoiruddin Br', nickname: 'Bambang', seq: 2, gender: 'Laki-laki', born: '1978', dead: '-', partner: 'Tutik Mardiana', partnerborn: '1983', partnerdead: '-', child: '-' },
      { id: 27, root: 8, fullname: 'Imam Taroji Rohmatullah', nickname: '-', seq: 3, gender: 'Laki-laki', born: '1980', dead: '-', partner: 'Nanik Rohana', partnerborn: '1980', partnerdead: '-', child: '1' },
      { id: 28, root: 8, fullname: 'Sabit Akdamana', nickname: 'Sabit', seq: 4, gender: 'Laki-laki', born: '1983', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 29, root: 8, fullname: 'Yeyen Pardiyan Efendi', nickname: 'Yeyen', seq: 5, gender: 'Laki-laki', born: '1986', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 30, root: 8, fullname: 'David Taufiq Irijal', nickname: '-', seq: 6, gender: 'Laki-laki', born: '1989', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
    ];

    // 3
    // data buyut
    const buyutData = [
      { id: 1, root: 1, fullname: 'Samrotul Fikriyah', nickname: '-', seq: 1, gender: 'Perempuan', born: '1975', dead: '-', partner: 'Anas Mubarok', partnerborn: '1975', partnerdead: '-', child: '2' },
      { id: 2, root: 1, fullname: 'Khoirotul Syukriyah', nickname: '-', seq: 2, gender: 'Perempuan', born: '1982', dead: '-', partner: 'Langgeng Budianto', partnerborn: '1980', partnerdead: '-', child: '1' },
      { id: 3, root: 1, fullname: 'Tarbiyatul Sa`diyah', nickname: '-', seq: 3, gender: 'Perempuan', born: '1990', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 4, root: 2, fullname: 'Ngafiyani', nickname: '-', seq: 1, gender: 'Perempuan', born: '1984', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 5, root: 2, fullname: 'Lilis', nickname: '-', seq: 2, gender: 'Perempuan', born: '1987', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 6, root: 2, fullname: 'Nanik', nickname: '-', seq: 3, gender: 'Perempuan', born: '1995', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 7, root: 4, fullname: 'Jayin Fikri Mahbubi', nickname: '-', seq: 1, gender: 'Laki-laki', born: '1991', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 8, root: 4, fullname: 'Adib Nur Sidqi', nickname: '-', seq: 2, gender: 'Laki-laki', born: '1991', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 9, root: 5, fullname: 'Masrukin', nickname: '-', seq: 1, gender: 'Laki-laki', born: '1995', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 10, root: 5, fullname: 'Saiman Al Farisi', nickname: '-', seq: 2, gender: 'Laki-laki', born: '2001', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 11, root: 5, fullname: 'Andrik Setiawan', nickname: '-', seq: 3, gender: 'Laki-laki', born: '2003', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 12, root: 7, fullname: 'Moh. Muhim', nickname: '-', seq: 1, gender: 'Laki-laki', born: '1997', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 13, root: 7, fullname: 'Irsad', nickname: '-', seq: 2, gender: 'Laki-laki', born: '2000', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 14, root: 8, fullname: 'Asma Salsabila', nickname: '-', seq: 1, gender: 'Perempuan', born: '2005', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 15, root: 8, fullname: 'Danil Fatoni', nickname: '-', seq: 2, gender: 'Laki-laki', born: '2000', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 16, root: 9, fullname: 'Nanda Sabila Firdausita', nickname: '-', seq: 1, gender: 'Perempuan', born: '2002', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 17, root: 10, fullname: 'Erlina Abiyun Al Aft', nickname: '-', seq: 1, gender: 'Perempuan', born: '1999', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 18, root: 10, fullname: 'Farah Via Nurrohmi', nickname: '-', seq: 2, gender: 'Perempuan', born: '2000', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 19, root: 10, fullname: 'M. Aqil Al Farabi', nickname: '-', seq: 3, gender: 'Laki-laki', born: '2004', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 20, root: 10, fullname: 'M. Aidu Al Vasina', nickname: '-', seq: 4, gender: 'Laki-laki', born: '2007', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 21, root: 12, fullname: 'Athourrohim', nickname: 'Atho', seq: 1, gender: 'Laki-laki', born: '1980', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 22, root: 12, fullname: 'Nilam Safrotul Mufidah', nickname: 'Nilam', seq: 2, gender: 'Perempuan', born: '1990', dead: '-', partner: 'Syaiful Abidin', partnerborn: '1985', partnerdead: '-', child: '2' },
      { id: 23, root: 12, fullname: 'Ainun Nisail Azizah', nickname: 'Inun', seq: 3, gender: 'Perempuan', born: '2000', dead: '-', partner: 'M. Robith Alif Fahmi', partnerborn: '1997', partnerdead: '-', child: '-' },
      { id: 24, root: 13, fullname: 'M. Wildan Mahmud', nickname: 'Wildan', seq: 1, gender: 'Laki-laki', born: '1988', dead: '-', partner: 'Fina Idamatus Silmi', partnerborn: '-', partnerdead: '-', child: '1' },
      { id: 25, root: 13, fullname: 'Fina Rohmatul Ummah', nickname: 'Fina', seq: 2, gender: 'Perempuan', born: '1992', dead: '-', partner: 'Abdul Halim Sururi', partnerborn: '-', partnerdead: '-', child: '2' },
      { id: 26, root: 13, fullname: 'Abdul Hamid Sulthoni', nickname: 'Oni', seq: 3, gender: 'Laki-laki', born: '2002', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 27, root: 14, fullname: 'Miftakul Rohmah', nickname: 'Miftah', seq: 1, gender: 'Perempuan', born: '1982', dead: '-', partner: 'Nanang Tri Harianto', partnerborn: '1981', partnerdead: '-', child: '2' },
      { id: 28, root: 14, fullname: 'Nurul Hidayatul Ulfa', nickname: 'Ulfa', seq: 2, gender: 'Perempuan', born: '1984', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 29, root: 15, fullname: 'Abid Hidayaturrohman', nickname: 'Sulton', seq: 1, gender: 'Laki-laki', born: '1986', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 30, root: 15, fullname: 'Wahib Fathurrohman', nickname: 'Wahib', seq: 2, gender: 'Laki-laki', born: '1988', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 31, root: 15, fullname: 'Suud Ilasari Rahmawati', nickname: 'Ela', seq: 3, gender: 'Perempuan', born: '1999', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 32, root: 16, fullname: 'M. Walad Alfadlilatul `Azza', nickname: 'Fadel', seq: 1, gender: 'Laki-laki', born: '1996', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 33, root: 16, fullname: 'Anzilatur Rohmah Attamyizi', nickname: 'Dila', seq: 2, gender: 'Perempuan', born: '2002', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 34, root: 17, fullname: 'M. Dzawil Albab Al Haq', nickname: 'Albab', seq: 1, gender: 'Laki-laki', born: '2001', dead: '2022', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 35, root: 17, fullname: 'M. Hisan Yahya Al Haq', nickname: 'Hisan', seq: 2, gender: 'Laki-laki', born: '2006', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 36, root: 17, fullname: 'Nilna Mazaya Al Haq', nickname: 'Nilna', seq: 3, gender: 'Perempuan', born: '-', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 37, root: 18, fullname: 'Luluk Lailatul Izza', nickname: 'Luluk', seq: 1, gender: 'Perempuan', born: '1993', dead: '-', partner: 'Roisul Ma`arif', partnerborn: '1993', partnerdead: '-', child: '2' },
      { id: 38, root: 18, fullname: 'Rizqy Faidatul Faradilla', nickname: 'Kikik', seq: 2, gender: 'Perempuan', born: '1995', dead: '-', partner: 'Rizky Fadhlillah', partnerborn: '1996', partnerdead: '-', child: '1' },
      { id: 39, root: 19, fullname: 'M. Adzka Sari`ul Fahmi Ridwan', nickname: 'Fahmi/Adzka', seq: 1, gender: 'Laki-laki', born: '1998', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 40, root: 19, fullname: 'Zahabatuz Zainun Najwa Ridwan', nickname: 'Zaha', seq: 2, gender: 'Perempuan', born: '2006', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 41, root: 20, fullname: 'Khoiruddin Anwar', nickname: '-', seq: 1, gender: 'Laki-laki', born: '1990', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 42, root: 20, fullname: 'Asrul Nasiroh', nickname: '-', seq: 2, gender: 'Perempuan', born: '1998', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 43, root: 21, fullname: 'Ari Ihwanuddin', nickname: '-', seq: 1, gender: 'Laki-laki', born: '1988', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 44, root: 21, fullname: 'Asna Muyasaroh', nickname: '-', seq: 2, gender: 'Perempuan', born: '1991', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 45, root: 21, fullname: 'Awi Rifa`i', nickname: '-', seq: 3, gender: 'Laki-laki', born: '1991', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 46, root: 21, fullname: 'M. Imam Fauzi', nickname: '-', seq: 4, gender: 'Laki-laki', born: '2002', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 47, root: 22, fullname: 'M. Misbahul Munir', nickname: 'Misbah', seq: 1, gender: 'Laki-laki', born: '1998', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 48, root: 22, fullname: 'Faruq Naizul Haqi', nickname: 'Faruq', seq: 2, gender: 'Laki-laki', born: '2002', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 49, root: 23, fullname: 'Niswatul Azizah Syamsul Putri', nickname: 'Niswa', seq: 1, gender: 'Perempuan', born: '2005', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 50, root: 25, fullname: 'M. Asroful Alifudin Ferdiyansyah', nickname: 'Ferdi', seq: 1, gender: 'Laki-laki', born: '2002', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 51, root: 27, fullname: 'M. Fahrul Ilmi Rohmatullah', nickname: '-', seq: 1, gender: 'Laki-laki', born: '2008', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
    ];

    // 4
    // data canggah
    const canggahData = [
      { id: 1, root: 1, fullname: 'Haikun Ni`mah', nickname: '-', seq: 1, gender: 'Perempuan', born: '2000', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 2, root: 1, fullname: 'Arina Ulyadina', nickname: '-', seq: 2, gender: 'Perempuan', born: '2002', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 3, root: 2, fullname: 'Ach. Rizqi Faqih Ridho', nickname: '-', seq: 1, gender: 'Laki-laki', born: '-', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 4, root: 27, fullname: 'Zida Zaidan', nickname: 'Zida', seq: 1, gender: 'Laki-laki', born: '2007', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 5, root: 27, fullname: 'Alfian', nickname: 'Alfian', seq: 2, gender: 'Laki-laki', born: '2015', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 6, root: 37, fullname: 'Aurora Zakkyyatut Thoyyibah', nickname: 'Kiya', seq: 1, gender: 'Perempuan', born: '2019', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 7, root: 37, fullname: 'M. Aqil Irsyad Ma`arif', nickname: 'Aqil', seq: 2, gender: 'Laki-laki', born: '2021', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 8, root: 38, fullname: 'M. Isa Hazairin Rahman', nickname: 'Isa', seq: 1, gender: 'Laki-laki', born: '2022', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 9, root: 22, fullname: 'Bilqis Mutiara Muna Syani', nickname: 'Bilqis', seq: 1, gender: 'Perempuan', born: '2014', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 10, root: 22, fullname: 'Kenzie Azzahra Ramadhani', nickname: 'Kenzie', seq: 2, gender: 'Perempuan', born: '2020', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 11, root: 24, fullname: 'Anatasya Huri Almahera', nickname: '-', seq: 1, gender: 'Perempuan', born: '-', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 12, root: 25, fullname: 'Hilma Syafira Isti`nafiatin', nickname: 'Hilma', seq: 1, gender: 'Perempuan', born: '-', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
      { id: 13, root: 25, fullname: 'Syifaun Nafis', nickname: 'Nafis', seq: 2, gender: 'Perempuan', born: '-', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
    ];

    // 5
    // data wareng
    const warengData = [
      { id: 0, root: 0, fullname: '-', nickname: '-', seq: 0, gender: '-', born: '-', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
    ];

    // 6
    // data udhegudhed
    const udhegudhegData = [
      { id: 0, root: 0, fullname: '-', nickname: '-', seq: 0, gender: '-', born: '-', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
    ];

    // 7
    // data gantungsiwur
    const gantungsiwurData = [
      { id: 0, root: 0, fullname: '-', nickname: '-', seq: 0, gender: '-', born: '-', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
    ];

    // 8
    // data gropaksenthe
    const gropaksentheData = [
      { id: 0, root: 0, fullname: '-', nickname: '-', seq: 0, gender: '-', born: '-', dead: '-', partner: '-', partnerborn: '-', partnerdead: '-', child: '-' },
    ];