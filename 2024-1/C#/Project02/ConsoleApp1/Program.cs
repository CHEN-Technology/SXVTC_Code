using System;
namespace workspace
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int Count = 0;

            for (int a = 0; a <= 10; a++)
            {
                for (int b = 0; b <= 10; b++)
                {
                    for (int c = 0; c <= 10; c++)
                    {
                        if (a + 5 * b + 10 * c == 36)
                        {
                            Count++;
                        }
                    }
                }
            }

            Console.WriteLine("有" + Count + "种支付方式");
        }
    }
}