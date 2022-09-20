public class HelloWorld{

    public static void main(String[] args){

        double nota1 = 67;

        double nota2 = 42;

        double nota3 = 36;

        double media = (nota1 + nota2 + nota3) / 3;

        double exame = 100 - media;

        if (media >= 70) {
        System.out.println("Voce esta aprovado!");
        } else {
       System.out.println("Voce esta de exame!" + (exame) + "É a nota que você precisa tirar no exame!");
        }

    }
}
