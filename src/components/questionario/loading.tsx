import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface LoadingProps {
  message: string;
  nome_autor?: string;
}

export function Loading({ message, nome_autor }: LoadingProps) {
  return (
    <div className="fixed inset-0 bg-purple-950/60 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center px-4 w-full max-w-2xl"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block mb-6"
        >
          <Heart className="w-16 h-16 text-white" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-white">
            {message}
          </h2>
          {nome_autor && (
            <p className="text-gray-200">
              {nome_autor}, estamos analizando las respuestas de para crear un resultado personalizado.
            </p>
          )}
          {!nome_autor && (
            <p className="text-gray-200">
              Estamos analizando tus respuestas para crear un resultado personalizado.
            </p>
          )}
        </motion.div>

        {/* Barra de Progresso */}
        <motion.div 
          className="mt-8 w-full h-2 bg-white/20 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 8,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
