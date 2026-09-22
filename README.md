# Treino do Glau

App de registro de treino. Funciona offline depois da primeira visita. Versão 17.

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

## Atualizar o app depois de mudar algo

O service worker guarda os arquivos em cache. Ao publicar uma versão nova, suba o `index.html` e o `sw.js` juntos. A linha de versão do `sw.js` já vem trocada (`treino-glau-v17`). Sem isso o celular pode continuar mostrando a versão antiga.

## Instalar no celular

- **iPhone (Safari):** abra o endereço, toque em Compartilhar e depois em "Adicionar à Tela de Início".
- **Android (Chrome):** abra o endereço e aceite "Instalar app".

Teste sempre com o app instalado. Instalado, ele roda sem barra de navegador, e é nesse modo que layout, zoom e tela acesa precisam ser avaliados.

## Como o app se organiza

| Tela | Serve para |
|---|---|
| **Início** | Próximo treino, números da semana, metas de cardio, programa, últimas 10 sessões, resumo e backup |
| **Histórico** | Calendário mensal com todas as sessões. Abre pelo botão *Ver histórico completo* no Início. Toque num dia para ver só aquele dia |
| **Treino** | A execução: montagem, exercícios, registro de séries e descanso |
| **Guia** | Consulta: regras, progressão, montagem de cada treino, pesos, cardio, mobilidade em casa |

## Montagem

A montagem de cada treino é **calculada pelo app** a partir do estoque de anilhas registrado no código (`ESTOQUE`) e da carga de cada exercício. Se um programa pedir duas cargas diferentes nos halteres na mesma sessão, ou mais anilha do que existe, a montagem mostra o conflito em vermelho antes de você começar.

Halteres precisam de 4 anilhas iguais de cada tipo, uma por ponta. Por isso, hoje, só as de 5 kg servem neles. Ao comprar anilhas para os halteres, compre de 4 em 4 e atualize o `ESTOQUE`.

Com a sessão iniciada, toque em **Montado** e o card recolhe.

## Durante o treino

- **Blocos com cor:** aquecimento em amarelo, treino em verde, core em azul, intervalado em vermelho. A faixa no topo mostra em que bloco você está e quanto falta em cada um; toque num bloco para ir até ele.
- **Um exercício aberto por vez:** o atual abre sozinho. Ao abrir outro pelo nome, os demais fecham. No par, os dois ficam abertos juntos.
- **Ao abrir um exercício**, a tela se reposiciona para o topo do cartão ficar logo abaixo do cabeçalho. Num par, o topo do par inteiro.
- **O foco anda para a frente.** Ao concluir ou pular um exercício, o app vai para o próximo dali em diante. Só volta ao começo da lista quando não sobra nada adiante.
- **O cartão fechado** mostra só nome, carga e séries × repetições, numa linha.
- **O cartão aberto** mostra o músculo alvo, um bloco com a carga em destaque e a prescrição embaixo, e a tabela de séries. Detalhes que você consulta uma vez (músculos auxiliares, o que não deve sentir, execução) ficam no *Como fazer*.
- **Três ícones** no canto do cartão aberto: **?** abre o *Como fazer*, o **vídeo** procura no YouTube e o **círculo cortado** marca *não vou fazer*.
- **Como fazer:** abre numa janela por cima da tela, sem empurrar o resto da lista. Só uma fica aberta por vez. Com qualquer janela aberta o fundo fica travado, e ao fechar a lista volta exatamente onde estava.
- **Não vou fazer:** o exercício fica riscado e sai da contagem de séries, o app segue para o próximo e a sessão salva registra o que ficou de fora. O botão vira uma seta de desfazer e continua visível no cartão riscado.
- **Sinal de progressão:** *Subir carga*, *Buscar +1 rep* ou *Manter carga*, calculado pela dupla progressão a partir da última vez.
- **Preenchimento:** ao marcar uma série vazia, o app repete a carga da série de cima; se for a primeira, usa a da última vez; se nunca foi feito, usa a do programa.
- **Descanso:** começa sozinho, tem **+30 s** e **Pular**, e toca um aviso sonoro no fim. Com o modo silencioso ligado, o iPhone pode não tocar.
- **Tela acesa:** durante a sessão o app pede para a tela não apagar. No app instalado funciona a partir do iOS 18.4.
- **Cronômetro no topo:** toque para pausar e toque de novo para retomar.
- **Descartar e Encerrar:** na barra de baixo. Os dois pedem confirmação. Ao encerrar, uma tela mostra o que subiu em relação à última vez.

## Qual carga registrar

| Rótulo | O que digitar |
|---|---|
| **Halter** | O peso de **um** halter, sem a caneleira |
| **Canel.** | O peso da caneleira, separado. O app soma os dois |
| **kg por lado** | O peso usado no lado que está trabalhando |
| **kg total** | O peso total na barra, incluindo a barra |
| **Placas** | O número de placas grandes selecionadas na estação W2 |
| **Base** | Peso corporal: deixe vazio e registre só a caneleira, se houver |

Na estação, o app converte placas em kg com placa menor de 4 kg e placas grandes de 6,8 kg.

## Cardio

| O quê | Meta | Como registrar |
|---|---|---|
| Caminhada no deslocamento | 5 por semana, 20 a 25 min | **+ Registrar cardio** na tela de Início, com minutos e distância |
| Intervalado 4×4 na bike | 1 por semana, após o Treino B | Dentro da primeira sessão B da semana, ou por **+ Registrar cardio** |

## Editar o histórico

Toque em qualquer sessão, no Início ou no calendário, para corrigir data, duração ou excluir. A data gravada é a de **início** do treino.

## Treino livre

O botão ★ Livre abre uma sessão fora do programa. Ela não avança a fila A → B → C e aparece numa seção própria do resumo semanal.

## Resumo semanal e backup

No fim da tela de Início:

- **Resumo da semana:** relatório em texto para copiar ou baixar, com sessões, tempo, cargas contra a semana anterior e exercícios prontos para subir.
- **Backup:** exporta o JSON completo e importa com validação. *Substituir tudo* troca o histórico do aparelho pelo do arquivo; *Mesclar* soma sem duplicar.

### Trocar o ícone no iPhone sem perder dados

Trocar o ícone exige remover e reinstalar o app, e isso apaga os dados. Antes, baixe o backup em `.json`; depois de reinstalar, importe com **Substituir tudo**.

## Onde ficam os dados

No `localStorage` do navegador, no próprio aparelho. Não vão para servidor nenhum e não sincronizam entre aparelhos. Faça backup de tempos em tempos.
