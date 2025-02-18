using System;

namespace workspace
{
    internal class Program
    {
        static void Main(string[] args)
        {
            for (int i = 1; i < 10; i++)
            {
                for (int j = 1; j <= i; j++)
                {
                    Console.Write(j + "X" + i + "=" + i * j + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
