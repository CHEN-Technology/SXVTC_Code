using System;

namespace workspace
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("请输入您的性别（男/女）：");
            string gender = Console.ReadLine();
            
            if (gender != "男" && gender != "女")
            {
                Console.WriteLine("请输入正确的性别！");
                Console.WriteLine("重试...");
            }

            Console.WriteLine("请输入您的年龄(周岁)：");
            if (!int.TryParse(Console.ReadLine(), out int age) || age < 0)
            {
                Console.WriteLine("请输入有效的年龄！");
                Console.WriteLine("重试...");
            }
            
            switch (gender)
            {
                case "男":
                    if (age >= 22)
                        Console.WriteLine("您已达到法定结婚年龄！");
                    else
                        Console.WriteLine("您未达到法定结婚年龄！");
                    break;
                case "女":
                    if (age >= 20)
                        Console.WriteLine("您已达到法定结婚年龄！");
                    else
                        Console.WriteLine("您未达到法定结婚年龄！");
                    break;
                default:
                    Console.WriteLine("请重新输入您的性别！");
                    break;
            }
        }
    }
}
