using System;

namespace workspace
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int result = 0;
            for (int i = 2; i <= 10000; i++){
                // Console.Write(i + " ");
                for (int j = 1; j < i; j++) {
                    if (i % j == 0) {
                        result += j;
                        // Console.Write(result + " ");
                        
                        if (result == i) {
                            Console.WriteLine(i); 
                        }
                    }
                }
                result = 0;
            }
        }
    }
}
