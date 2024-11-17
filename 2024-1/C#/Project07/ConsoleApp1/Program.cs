internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("请输入两个整数：");
        bool isInt1 = int.TryParse(Console.ReadLine(), out int result1);
        bool isInt2 = int.TryParse(Console.ReadLine(), out int result2);
        if (isInt1 && isInt2 && result1 < result2)
        {
            int result = 0;
            for (int i = result1 + 1; i < result2; i++)
            {
                result += i;
            }
            Console.WriteLine("和为：" + result);
        }
        else { 
            Console.WriteLine("输入有误，请重新输入！");
            Main(args);
        }
    }
}