using System.IO;

public class Program
{
    public static void Main()
    {
        try
        {


        using ()
        }
         catch (Exception erro)
         {
            Console.WriteLine($"Ocorreu um erro no arquivo {erro.Message}");
         }
    }
}
