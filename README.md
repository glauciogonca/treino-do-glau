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

## Exercícios na estação W2

Nesses exercícios o campo de carga pede o **número de placas grandes** selecionadas abaixo da placa menor, e o app mostra o peso convertido ao lado. A conversão usa placa menor de 4 kg e placas grandes de 6,8 kg — número que veio da ficha técnica do fabricante e ainda não foi conferido na balança.

## Qual carga registrar

O cabeçalho da coluna diz sempre qual número o app espera:

| Rótulo | O que digitar |
|---|---|
| **kg por mão** | O peso de **um** halter, não a soma dos dois |
| **kg por lado** | O peso usado no lado que está trabalhando (exercícios unilaterais) |
| **kg total** | O peso total na barra, incluindo a barra |
| **Placas** | O número de placas grandes selecionadas na estação W2 |

No cálculo de volume da sessão, exercícios "por mão" e "por lado" são contados duas vezes, já que os dois lados trabalham.

## Meta de cardio

A meta semanal é de **115 minutos**, que é a soma do programa: 3 sessões de zona 2 (25 min), 1 intervalada (20 min) e 2 soltas (10 min). A barra de progresso na tela de Início acompanha o total registrado na semana.

## Editar o histórico

Toque em qualquer sessão do histórico para abrir a edição. Dá para corrigir a data e hora de início, ajustar a duração ou excluir a sessão.

A data gravada é a de **início** do treino, não a de fim. Um treino que começa às 22h de segunda e termina 00h03 de terça fica registrado na segunda.

## Resumo semanal

Na tela de Início, o botão **Gerar resumo da semana** monta um relatório em texto com sessões, tempo, volume, cardio contra a meta, comparação de cargas com a semana anterior, exercícios prontos para subir carga e observações automáticas. Dá para escolher entre a semana atual e a anterior, copiar para a área de transferência ou baixar como `.txt`.

## Onde ficam os dados

Séries, cargas e histórico ficam no `localStorage` do próprio navegador, no seu aparelho. Não vão para servidor nenhum.

Consequências: limpar os dados do site apaga o histórico, e o histórico não sincroniza entre aparelhos. Se algum dia quiser backup ou sincronização, é preciso adicionar exportação de dados.
