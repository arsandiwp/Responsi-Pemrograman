using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ProjectMahasiswa
{
    class Program
    {
        // deklarasi objek collection untuk menampung objek mahasiswa
        static List<Mahasiswa> daftarMahasiswa = new List<Mahasiswa>();

        static void Main(string[] args)
        {
            Console.Title = "Responsi UAS Matakuliah Pemrograman";

            while (true)
            {
                TampilMenu();

                Console.Write("\nNomor Menu [1..4]: ");
                int nomorMenu = Convert.ToInt32(Console.ReadLine());

                switch (nomorMenu)
                {
                    case 1:
                        TambahMahasiswa();
                        break;

                    case 2:
                        HapusMahasiswa();
                        break;

                    case 3:
                        TampilMahasiswa();
                        break;

                    case 4: // keluar dari program
                        return;

                    default:
                        break;
                }
            }
        }

        static void TampilMenu()
        {
            Console.Clear();
            Console.WriteLine("Pilih Menu Aplikasi");
            Console.WriteLine();
            Console.WriteLine("1. Tambah Mahasiswa");
            Console.WriteLine("2. Hapus Mahasiswa");
            Console.WriteLine("3. Tampilkan Mahasiswa");
            Console.WriteLine("4. Keluar");

            // PERINTAH: lengkapi kode untuk menampilkan menu
        }

        static void TambahMahasiswa()
        {
            Console.Clear();

            Console.WriteLine("=====================================");
            Console.WriteLine("======= TAMBAH DATA MAHASISWA =======");
            Console.WriteLine("=====================================");

            mahasiswa mahasiswa = new mahasiswa();
            Console.WriteLine("Tambah Data Mahasiswa");
            Console.WriteLine();

            Console.Write("NIM: ");
            mahasiswa.NIM = Console.ReadLine();

            Console.Write("Nama: ");
            mahasiswa.Nama = Console.ReadLine();

            Console.Write("Jenis Kelamin [L/P]: ");
            mahasiswa.JenisKelamin = Console.ReadLine();

            Console.Write("IPK: ");
            mahasiswa.IPK = int.Parse(Console.ReadLine());

            daftarMahasiswa.Add(mahasiswa);
            Console.WriteLine();

            // PERINTAH: lengkapi kode untuk menambahkan objek mahasiswa ke dalam collection

            Console.WriteLine("\nTekan ENTER untuk kembali ke menu");
            Console.ReadKey();
        }

        static void HapusMahasiswa()
        {
            Console.Clear();

            int nomor = -1, hapus = -1;

            Console.WriteLine("=====================================");
            Console.WriteLine("======== HAPUS DATA MAHASISWA =======");
            Console.WriteLine("=====================================");

            Console.Write("NIM: ");
            string code = Console.ReadLine();
            foreach (Mahasiswa mahasiswa in daftarMahasiswa)
            {
                nomor++;
                if (mahasiswa.NIM == code)
                {
                    hapus = nomor;
                }
            }

            if (hapus != -1)
            {
                daftarMahasiswa.RemoveAt(hapus);
                Console.WriteLine("\nData Produk dapat dihapus");
            }

            else
            {
                Console.WriteLine("\nKode Produk tidak dapat ditemukan");
            }
            // PERINTAH: lengkapi kode untuk menghapus objek mahasiswa dari dalam collection

            Console.WriteLine("\nTekan ENTER untuk kembali ke menu");
            Console.ReadKey();
        }

        static void TampilMahasiswa()
        {
            Console.Clear();

            int Urut = 0;
            Console.WriteLine("=====================================");
            Console.WriteLine("===========  DATA MAHASISWA =========");
            Console.WriteLine("=====================================");

            foreach (Mahasiswa mahasiswa in daftarMahasiswa)
            {

                Console.WriteLine("{0}. NIM: {1}, Nama: {2}, Jenis Kelamin[L/P]: {3}, IPK: {4}", Urut, mahasiswa.NIM, mahasiswa.Nama, mahasiswa.JenisKelamin, mahasiswa.IPK);
                Urut++;
            }
            if (Urut < 1)
            {
                Console.WriteLine("Data Mahasiswa Kosong");
            }

            // PERINTAH: lengkapi kode untuk menampilkan daftar mahasiswa yang ada di dalam collection

            Console.WriteLine("\nTekan enter untuk kembali ke menu");
            Console.ReadKey();
        }
    }
}