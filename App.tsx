import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 pb-12">
      <header className="container mx-auto py-6 flex justify-center items-center">
        <h1 className="text-3xl font-bold text-green-600">Emagreça com Saúde</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12 relative">
          <Image 
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80" 
            alt="Variedade de frutas e vegetais frescos" 
            width={1000} 
            height={600}
            className="rounded-lg shadow-lg mb-8 w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
            <h2 className="text-4xl font-bold text-white mb-4">Descubra o Segredo para um Emagrecimento Saudável e Duradouro</h2>
            <p className="text-xl text-white mb-8 max-w-2xl">Nosso ebook vai te guiar em uma jornada de transformação, com dicas práticas e eficazes.</p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image 
              src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
              alt="Capa do Ebook" 
              width={500} 
              height={700}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">O que você vai aprender:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Estratégias nutricionais para acelerar o metabolismo</li>
              <li>Exercícios eficientes para queima de gordura</li>
              <li>Receitas deliciosas e saudáveis</li>
              <li>Técnicas para manter a motivação</li>
              <li>Dicas para evitar o efeito sanfona</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Resultados Reais</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-23%20at%2002.39.36-b32kxf3YnlKkVN46a78P4xnPiqVSyq.jpeg"
                alt="Transformação masculina - 20kg em 55 dias" 
                width={500} 
                height={500}
                className="rounded-lg shadow-md w-full"
              />
              <p className="text-gray-700 text-center font-medium">
                "20kg em 55 dias - Transformação masculina incrível!"
              </p>
            </div>
            <div className="space-y-4">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-23%20at%2002.39.36%20(1)-nJ8k1kw3RjlJ8TF7BFTD1Kmpe9numb.jpeg"
                alt="Transformação feminina - 16kg perdidos" 
                width={500} 
                height={500}
                className="rounded-lg shadow-md w-full"
              />
              <p className="text-gray-700 text-center font-medium">
                "Perdi 16kg seguindo o método!"
              </p>
            </div>
            <div className="space-y-4">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-23%20at%2002.39.36%20(3)-KFl6oQIByFtQ2hxSuTWLw32xXjB9KM.jpeg"
                alt="Progresso em 3 meses" 
                width={500} 
                height={500}
                className="rounded-lg shadow-md w-full"
              />
              <p className="text-gray-700 text-center font-medium">
                "3 meses de transformação com resultados incríveis!"
              </p>
            </div>
            <div className="space-y-4">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-23%20at%2002.39.36%20(2)-6mbzfWoQNKNQ0c14iYAH0nulDHCyQP.jpeg"
                alt="Resultado na balança" 
                width={500} 
                height={500}
                className="rounded-lg shadow-md w-full"
              />
              <p className="text-gray-700 text-center font-medium">
                "Resultados reais na balança - Perda constante e saudável"
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg p-8 mb-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Emagrecimento Saudável: Transforme sua Vida com Consciência e Equilíbrio</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Emagrecer vai muito além de apenas perder peso. É um processo que envolve saúde, bem-estar e a busca por uma vida mais equilibrada. Mais do que seguir dietas restritivas ou métodos milagrosos, o segredo do emagrecimento saudável está na construção de hábitos sustentáveis, que respeitem o seu corpo e promovam mudanças positivas a longo prazo.
                </p>
                <p className="mb-4">
                  Nosso compromisso é ajudar você a alcançar seus objetivos com estratégias personalizadas, combinando alimentação balanceada, atividade física e cuidado emocional. Lembre-se: cada passo conta, e o mais importante é cuidar de si mesmo com paciência e amor.
                </p>
                <p className="font-semibold">
                  Transforme sua saúde e descubra o melhor de você! Estamos prontos para acompanhar você nessa jornada.
                </p>
              </div>
              <div className="relative w-64 h-64 mx-auto md:w-full md:h-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/114351198-dietas-para-emagrecer-que-funcionam-UfRzaAoSOyhBmLvnlSBrLLecFpavDb.webp"
                  alt="Salada saudável com fita métrica"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center relative">
          <Image 
            src="https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            alt="Variedade de ervas e especiarias para chás" 
            width={1000} 
            height={300}
            className="rounded-lg shadow-lg mb-8 w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Pronto para começar sua transformação?</h3>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full"
              onClick={() => window.open('https://wa.me/5519981154877?text=Olá,%20tenho%20interesse%20em%20adquirir%20o%20E-book', '_blank')}
            >
              Comprar Agora
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

