# Treino do Glau

App de registro de treino do Ciclo 1. Funciona offline depois da primeira visita.

## Publicar no GitHub Pages

1. Crie um repositório novo, por exemplo `treino-glau`.
2. Suba todos os arquivos desta pasta na raiz do repositório:

```
index.html
manifest.webmanifest
sw.js
icons/icon-192.png
icons/icon-512.png
icons/icon-maskable-512.png
icons/apple-touch-icon.png
```

3. No repositório, vá em **Settings → Pages** e em **Source** selecione a branch `main` e a pasta `/ (root)`.
4. Aguarde alguns minutos e acesse `https://SEU-USUARIO.github.io/treino-glau/`.

Todos os caminhos são relativos, então funciona em subpasta sem ajuste.

## Importante: teste com o app instalado

Abrir o `index.html` num navegador ou numa pré-visualização não é o mesmo que usar o app instalado. Instalado na tela de início, ele roda em modo `standalone`, sem barra de navegador e sem os gestos do navegador. Bugs de layout e de zoom precisam ser avaliados nesse modo.

## Instalar no celular

- **iPhone (Safari):** abra o endereço, toque em Compartilhar e depois em "Adicionar à Tela de Início".
- **Android (Chrome):** abra o endereço e aceite "Instalar app", ou use o menu ⋮ → "Adicionar à tela inicial".

## Atualizar o app depois de mudar algo

O service worker guarda os arquivos em cache. Depois de editar o `index.html`:

1. Abra o `sw.js` e mude a linha da versão, por exemplo de `treino-glau-v1` para `treino-glau-v2`.
2. Faça o commit dos dois arquivos.

Sem isso o celular pode continuar mostrando a versão antiga.

## Cronômetro

O relógio no topo começa ao tocar em "Iniciar treino". **Toque nele para pausar e toque de novo para retomar** — útil para fazer a mobilidade em casa depois de sair da academia. Pausado, ele fica vermelho com um ícone de play. O tempo salvo no histórico desconta as pausas.

## Cardio

No cartão de cardio, escolha **Esteira** ou **Bike** e preencha minutos e distância. O resumo da semana aparece na tela de Início, com a quilometragem separada por modalidade.

## Onde ficam os dados

Séries, cargas e histórico ficam no `localStorage` do próprio navegador, no seu aparelho. Não vão para servidor nenhum.

Consequências: limpar os dados do site apaga o histórico, e o histórico não sincroniza entre aparelhos. Se algum dia quiser backup ou sincronização, é preciso adicionar exportação de dados.
