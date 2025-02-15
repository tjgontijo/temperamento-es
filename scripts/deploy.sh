#!/bin/bash
# Encerra o script caso ocorra algum erro, variável não definida, ou erro em pipeline
set -euo pipefail
IFS=$'\n\t'

# Variáveis de configuração
APP_NAME="decifrandocoracoes"
PROJECT_DIR="/var/www/decifrandocoracoes"

echo "==> Entrando no diretório do projeto: $PROJECT_DIR"
cd "$PROJECT_DIR" || { echo "Erro: diretório do projeto não encontrado!"; exit 1; }

echo "==> Removendo build anterior (.next)..."
rm -rf .next

echo "==> Limpando cache do npm..."
npm cache clean --force

echo "==> Atualizando o repositório (git pull)..."
git pull

#echo "==> Otimizando imagens no diretório public..."
#find public -type f -iname "*.jpg" -exec jpegoptim --strip-all --max=80 --all-progressive {} \;
#find public -type f -iname "*.jpeg" -exec jpegoptim --strip-all --max=80 --all-progressive {} \;
#find public -type f -iname "*.png" -exec pngquant --force --ext .png --quality=80-90 --skip-if-larger {} \;

echo "==> Executando build do Next.js..."
npm run build

echo "==> Parando o processo PM2: $APP_NAME..."
pm2 stop "$APP_NAME"

# Aguarda 2 segundos para garantir que o processo tenha sido finalizado
sleep 2

echo "==> Reiniciando o processo PM2: $APP_NAME..."
pm2 start "$APP_NAME"

echo "==> Reiniciando o Nginx..."
sudo systemctl restart nginx

echo "==> Deploy concluído com sucesso!"
