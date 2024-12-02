namespace study7_2_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            float[,] pScores = new float[5, 4];
            string[] Cname = { "语文", "数学", "英语" };
            for (int i = 0; i < pScores.GetLength(0) - 1; i++)
            {
                for (int j = 0; j < pScores.GetLength(1) - 1; j++)
                {
                    Console.WriteLine("请输入第{0}个学生的{1}成绩", i + 1, Cname[j]);
                    pScores[i, j] = float.Parse(Console.ReadLine());
                }
            }

            for (int i = 0; i < pScores.GetLength(0); i++)
            {

                for (int j = 0; j < pScores.GetLength(1); j++)
                {
                    if (j < pScores.GetLength(1) - 1)
                    {
                        pScores[i, pScores.GetLength(1) - 1] += pScores[i, j];
                    }
                }
            }

            for (int i = 0; i < pScores.GetLength(1); i++)
            {
                for (int j = 0; j < pScores.GetLength(0); j++)
                {
                    if(j < pScores.GetLength(0) - 1)
                    {
                        pScores[pScores.GetLength(0) - 1, i] += pScores[j, i];
                    }
                }
                pScores[pScores.GetLength(0) - 1, i] /= pScores.GetLength(0) - 1;
            }

            Console.WriteLine("编号\t语文\t数学\t英语\t总分");

            for (int i = 0; i < pScores.GetLength(0); i++)
            {
                if (i < pScores.GetLength(0) - 1)
                {
                    Console.Write("{0}\t", i + 1);
                }else{
                    Console.Write("平均分\t");
                }
                
                for (int j = 0; j < pScores.GetLength(1); j++)
                {
                    Console.Write("{0}\t", pScores[i, j]);
                }
                Console.WriteLine();
            }
        }
    }
}


