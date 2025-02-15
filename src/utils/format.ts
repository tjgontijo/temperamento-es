export function formatarTextoComNome(texto: string, nome: string | undefined): string {
  // Usamos uma regex para garantir que só substituímos exatamente {nome}
  return texto.replace(
    /\{nome\}/g,
    `<span class="font-semibold text-purple-600">${nome || 'nome'}</span>`
  );
}
