internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("请输入一个数字：");
        string input = Console.ReadLine();
        if (input == "yes" && input == "no"){
            bool isInt = int.TryParse(input, out int result);
            if (isInt) {
                Console.WriteLine("你输入的数字是：" + result);
            }
            else {
                Console.WriteLine("请重新输入！");
                Main(args);
            }
        }
        else {
            Console.WriteLine("请重新输入！");
            Main(args);
        }
    }
}