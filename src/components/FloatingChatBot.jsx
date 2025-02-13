import { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedQuestion, setSelectedQuestion] = useState(null); 

  const questionsAndAnswers = [
    {
      question: 'Horários da academia',
      answer: 'A academia está aberta de segunda a sexta das 5:30h às 22h, e aos sábados das 14h às 18h.'
    },
    {
      question: 'Quanto é a mensalidade?',
      answer: 'A mensalidade custa R$ 70,00.'
    },
    {
      question: 'Tem aula experimental?',
      answer: 'Sim! Se você for um aluno novato, você pode solicitar uma aula experimental gratuita diretamente na recepção.'
    },
    {
      question: 'Como são os maquinários?',
      answer: 'Nossos equipamentos são modernos, seguros e de alta qualidade, adequados para todos os tipos de treino.'
    },
    {
      question: 'Meus treinos serão supervisionados?',
      answer: 'Sim, contamos com profissionais qualificados que supervisionam os treinos e oferecem suporte quando necessário.'
    }
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index); // Define a pergunta selecionada
  };

  const resetChat = () => {
    setSelectedQuestion(null); // Reseta a pergunta selecionada
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Botão flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-16 h-16 bg-marrom text-white rounded-full shadow-lg hover:bg-[#BE700E]"
        >
          <FaRobot size={30} />
        </button>
      )}

      {/* Janela do chatbot */}
      {isOpen && (
        <div className="w-80 p-4 text-white bg-cinza rounded-lg shadow-xl border border-gray-300">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-karantina text-[32px] lg:text-[29px] font-semibold">Ficou alguma dúvida?</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-marrom"
            >
              &#10005;
            </button>
          </div>

          {/* Lista de opções */}
          {!selectedQuestion && (
            <ul className="space-y-2 mb-2">
              {questionsAndAnswers.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleQuestionClick(index)}
                    className="w-full text-left text-black p-2 bg-white rounded-md hover:bg-gray-200"
                  >
                    {item.question}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Resposta da pergunta selecionada */}
          {selectedQuestion !== null && (
            <div>
              <p className="mb-3">{questionsAndAnswers[selectedQuestion].answer}</p>
              <button
                onClick={resetChat}
                className="text-white hover:underline font-medium"
              >
                Tem outra dúvida?
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingChatBot;
