import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Cabecario";
import Footer from "../components/Footer";
import "../styles/Pesquisas.css";

const ACERVO_PUBLICO = [
  {
    id: "PUB-2024-22",
    categoria: "Publicações Científicas",
    status: "RETIDO — PORTARIA Nº 22",
    tipoStatus: "censored",
    data: "14/11/20XX",
    autor: "Dr. Manoel Duarte (ID: ManoDuar_22) — Setor Químico 22",
    titulo:
      "Estudo sobre a [████████] Abissal por Resíduos Industriais e Polímeros no Setor 14",
    resumo:
      "Análise espectrométrica de sedimentos recolhidos em águas profundas demonstra reação anômala entre metais pesados descartados e estruturas biológicas não catalogadas.",
    conteudoCompleto: [
      "RESUMO EXECUTIVO (VERSÃO REVISADA PELA DIRETORIA): Durante as expedições preliminares de sondagem batimétrica, o Setor de Química Marinha (Unidade 22) coletou amostras de água e substrato próximas a zonas de descarte industrial profundo.",
      "DESPACHO DE CENSURA (PORTARIA Nº 22): Por determinação do Conselho Diretor da N.E.R.A., o termo de 8 letras que originalmente compunha o título deste artigo foi suprimido para evitar interpretações alarmistas pela imprensa antes da conclusão dos ensaios laboratoriais.",
      "ERRATA TÉCNICA ANEXADA PELO AUTOR (Dr. Manoel Duarte — ManoDuar_22): 'Eles podem apagar o título do portal público, mas não podem alterar a química da água. A causa primordial das anomalias que encontramos no fundo do mar tem um nome muito claro de 8 letras — o mesmo mal que sufoca nossos oceanos com plástico, esgoto e rejeitos químicos.'",
      "NOTA DE INDEXAÇÃO DO LABORATÓRIO 22: Todos os pacotes de dados brutos da conta ManoDuar_22 utilizam a cifra padrão de indexação alfanumérica contínua do setor (A=1, B=2, C=3 ... Z=26, sem acentuação ou cedilha, concatenando os números de cada letra sem espaços). A chave de acesso de Nível 2 corresponde exatamente à palavra de 8 letras suprimida no título acima.",
    ],
    pistaTag: "CHAVE DE INDEXAÇÃO SETOR 22 (A1Z26)",
  },
  {
    id: "MEM-TI-008",
    categoria: "Comunicados & Portarias",
    status: "VIGENTE",
    tipoStatus: "active",
    data: "29/11/20XX",
    autor: "Divisão de Segurança da Informação (TI-NERA)",
    titulo:
      "Memorando TI-08: Padronização de Credenciais NERA-NET e Protocolo de Licença",
    resumo:
      "Regulamenta o formato de identificação de usuários no banco de dados interno e define o PIN de contingência para coordenadores afastados.",
    conteudoCompleto: [
      "1. IDENTIFICAÇÃO DE USUÁRIO (USERNAME): Conforme diretriz implantada na atualização v4.0 da NERA-NET, as credenciais de pesquisadores-chefes seguem o padrão [1ª Letra do Nome][3 Primeiras Letras do Sobrenome]_[Código da Unidade].",
      "2. TRANSFERÊNCIA PARA A UNIDADE PARÁ: Informamos que os servidores de pesquisa em regeneração celular coordenados pelo Dr. Edgar Charles foram consolidados na Unidade Regional Pará (código de rede: Para), operando fisicamente no Laboratório 52, Subnível 21.",
      "3. PIN DE CONTINGÊNCIA DE NÍVEL 1: Enquanto perdurar a licença médica do Coordenador-Chefe da Unidade Pará, o acesso de consulta aos diretórios de Pesquisadores e Relatórios Ambientais (Nível 1) utiliza como senha numérica de 4 dígitos a concatenação direta de sua alocação física: [Nº do Laboratório][Nº do Subnível].",
    ],
    pistaTag: "PROTOCOLO DE ACESSO NÍVEL 1",
  },
  {
    id: "REL-HID-014",
    categoria: "Relatórios Hidrológicos",
    status: "ALERTA ÂMBAR",
    tipoStatus: "warning",
    data: "03/12/20XX",
    autor: "Dra. Beatriz Almeida & Equipe de Monitoramento Costeiro",
    titulo:
      "Boletim Pluviométrico Especial: Composição Química da Chuva Tóxica e Efluentes",
    resumo:
      "Monitoramento das bacias costeiras identifica correlação incomum entre o agravamento da Chuva Tóxica e o descarte de água utilizada em tanques experimentais.",
    conteudoCompleto: [
      "1. CONTEXTO ATMOSFÉRICO: As amostras de precipitação recolhidas nas últimas quatro semanas apresentaram queda acentuada de pH (média de 3.82) acompanhada de traços orgânicos não voláteis que não correspondem à poluição industrial atmosférica convencional.",
      "2. DIVERGÊNCIA TÉCNICA: A pesquisadora titular Dra. Beatriz Almeida solicitou a interdição imediata do circuito de descarte hídrico do laboratório principal, apontando risco de contaminação cruzada entre amostras biológicas abissais e o ciclo hidrológico costeiro.",
      "3. PARECER DA DIRETORIA: A solicitação foi indeferida por ausência de laudo conclusivo. A pesquisadora Beatriz Almeida foi desligada do quadro técnico antes da suspensão formal do programa experimental.",
    ],
    pistaTag: "REGISTRO AMBIENTAL // EFLUENTES",
  },
  {
    id: "PUB-BIO-009",
    categoria: "Publicações Científicas",
    status: "ARQUIVO PARCIAL",
    tipoStatus: "warning",
    data: "05/12/20XX",
    autor: "Camila Ferreira — Setor de Catalogação e Arquivo Biológico",
    titulo:
      "Inventário de Amostras Abissais: Divergência Cronológica (Novembro–Dezembro)",
    resumo:
      "Auditoria documental aponta lacunas nos registros de entrada de uma formação geológica/biológica recolhida no Setor Oceânico Profundo.",
    conteudoCompleto: [
      "Durante a conferência trimestral do arquivo de amostras coordenada por Camila Ferreira, constatou-se que os lotes catalogados entre 20/11 e 02/12 tiveram seus códigos de rastreio substituídos pela sigla interna provisória 'AB-14'.",
      "Embora o laudo preliminar de campo classificasse o material como 'SEGURO' e 'Completamente Inerte', requisições internas assinadas pelo Dr. Rafael Mendes solicitaram reforço urgente nas válvulas dos tanques de contenção poucos dias após a transferência da amostra.",
      "Todos os anexos fotográficos originais dessa coleta foram movidos para a seção restrita 'BIOLOGICAL DATABASE' (Autorização Nível 2 na NERA-NET).",
    ],
    pistaTag: "RASTREIO DE AMOSTRA // AB-14",
  },
  {
    id: "COM-OF-019",
    categoria: "Comunicados & Portarias",
    status: "NOTA DE ESCLARECIMENTO",
    tipoStatus: "active",
    data: "26/12/20XX",
    autor: "Assessoria Executiva & Diretoria de Segurança Interna",
    titulo:
      "Nota Oficial #019: Esclarecimento sobre Oscilação Elétrica na Véspera de Natal (24/12)",
    resumo:
      "A N.E.R.A. rebate boatos sobre falha nos sistemas de contenção e confirma encerramento da auditoria sob o Protocolo 24/12 — Anexo A.",
    conteudoCompleto: [
      "A Diretoria da N.E.R.A. esclarece ao público e aos órgãos reguladores que a interrupção elétrica ocorrida na noite de 24 de dezembro (24/12) nas instalações subterrâneas durou exatos 30 segundos, tratando-se de um teste programado de geradores.",
      "São inteiramente improcedentes os relatos anônimos de que o apagão teria durado onze minutos ou provocado perda de sinal nas câmeras de vigilância.",
      "NOTA DE AUDITORIA DE SEGURANÇA (NÍVEL 3): Todos os registros biométricos e de telemetria referentes ao evento do dia 24/12 foram arquivados sob a chave de protocolo '2412a' (Data do Evento: 2412 + Classificação de Segurança: Anexo 'a'). A abertura do dossiê final do programa encerrado exige credencial de Nível 3 vinculada ao prontuário de resistência biológica registrado durante o incidente.",
    ],
    pistaTag: "PROTOCOLO DE AUDITORIA // 2412a",
  },
  {
    id: "COM-OF-024",
    categoria: "Comunicados & Portarias",
    status: "PROCURA ADMINISTRATIVA",
    tipoStatus: "censored",
    data: "28/12/20XX",
    autor: "Departamento Jurídico e Segurança Patrimonial",
    titulo:
      "Comunicado #024: Convocação Urgente de Ex-Colaboradores e Revogação de Acessos",
    resumo:
      "Notificação pública para comparecimento imediato de pesquisadores ausentes após o encerramento das operações laboratoriais.",
    conteudoCompleto: [
      "A Administração da N.E.R.A. convoca formalmente os pesquisadores listados como 'PARADEIRO DESCONHECIDO' a entrarem em contato imediato com a Divisão de Segurança Patrimonial para devolução de crachás magnéticos e mídias criptografadas.",
      "Atenção especial é dirigida ao responsável técnico pelos sistemas de contenção e engenharia, cujo abandono de posto ocorreu logo após o alerta no tanque principal.",
      "Qualquer tentativa de acesso externo à NERA-NET utilizando credenciais de ex-funcionários ou do prontuário experimental #09 está sendo rastreada pelo terminal central.",
    ],
    pistaTag: "SEGURANÇA PATRIMONIAL",
  },
];

export default function Pesquisas() {
  const [filtro, setFiltro] = useState("Todos");
  const [docSelecionado, setDocSelecionado] = useState(null);
  const [textoCifra, setTextoCifra] = useState("");

  const categorias = [
    "Todos",
    "Publicações Científicas",
    "Relatórios Hidrológicos",
    "Comunicados & Portarias",
  ];

  const documentosFiltrados =
    filtro === "Todos"
      ? ACERVO_PUBLICO
      : ACERVO_PUBLICO.filter((doc) => doc.categoria === filtro);

  // Conversor auxiliar A1Z26 do Setor Químico 22
  function converterA1Z26(entrada) {
    const limpo = entrada
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .replace(/[^A-Z]/g, "");

    if (!limpo) return { letras: [], codigo: "—" };

    const pares = limpo.split("").map((letra) => ({
      letra,
      valor: letra.charCodeAt(0) - 64,
    }));

    return {
      letras: pares,
      codigo: pares.map((p) => p.valor).join(""),
    };
  }

  const resultadoCifra = converterA1Z26(textoCifra);

  return (
    <>
      <Header />
      <main className="pesquisas-main">
        <section className="pesquisas-banner">
          <div className="pesquisas-banner-inner">
            <span className="pesquisas-kicker">
              REPOSITÓRIO CIENTÍFICO & TRANSPARÊNCIA // N.E.R.A.
            </span>
            <h1>Pesquisas, Relatórios & Documentos Públicos</h1>
            <p>
              Consulte boletins hidrológicos sobre a Chuva Tóxica, artigos
              científicos indexados, memorandos de tecnologia da informação e
              notas oficiais da Diretoria Executiva.
            </p>
          </div>
        </section>

        <div className="pesquisas-container">
          {/* Barra de Filtros e Status do Acervo */}
          <div className="pesquisas-toolbar">
            <div className="filter-tabs" role="tablist">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={
                    filtro === cat ? "filter-btn active" : "filter-btn"
                  }
                  onClick={() => setFiltro(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="archive-counter">
              EXIBINDO <strong>{documentosFiltrados.length}</strong> REGISTROS
              DESCLASSIFICADOS
            </div>
          </div>

          {/* Grid de Documentos Públicos */}
          <div className="pesquisas-grid">
            {documentosFiltrados.map((doc) => (
              <article key={doc.id} className="pub-doc-card">
                <div className="pub-doc-top">
                  <span className="pub-doc-id">{doc.id}</span>
                  <span className={`pub-doc-status ${doc.tipoStatus}`}>
                    {doc.status}
                  </span>
                </div>

                <div className="pub-doc-body">
                  <span className="pub-doc-cat">{doc.categoria}</span>
                  <h3>{doc.titulo}</h3>
                  <p className="pub-doc-author">{doc.autor}</p>
                  <p className="pub-doc-summary">{doc.resumo}</p>
                </div>

                <div className="pub-doc-footer">
                  <span className="pub-doc-date">DATA: {doc.data}</span>
                  <button
                    type="button"
                    className="btn-open-doc"
                    onClick={() => setDocSelecionado(doc)}
                  >
                    Inspecionar Documento →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Utilitário Técnico Diegético: Indexador Alfanumérico do Setor Químico 22 */}
          <section className="chemical-indexer-section">
            <div className="indexer-info">
              <span className="mono-tag">
                UTILITÁRIO DE ARQUIVO // SETOR DE QUÍMICA MARINHA (UNIDADE 22)
              </span>
              <h2>Verificador de Indexação Alfanumérica (Padrão A1Z26)</h2>
              <p>
                Ferramenta pública utilizada pelo <strong>Setor 22</strong> para
                gerar chaves numéricas de catalogação a partir de termos
                técnicos (onde <code>A=1</code>, <code>B=2</code>,{" "}
                <code>C=3</code> ... <code>Z=26</code>, ignorando acentos e
                cedilha).
              </p>
              <p className="indexer-hint">
                Dica de Arquivo: Consulte a <strong>Portaria Nº 22</strong>{" "}
                acima para verificar qual termo de 8 letras foi suprimido do
                estudo do Dr. Manoel Duarte (<code>ManoDuar_22</code>).
              </p>
            </div>

            <div className="indexer-terminal">
              <label htmlFor="cifra-input">
                INSIRA O TERMO TÉCNICO PARA CONVERSÃO NUMÉRICA:
              </label>
              <input
                id="cifra-input"
                type="text"
                placeholder="Digite uma palavra-chave (ex: OCEANO)..."
                value={textoCifra}
                onChange={(e) => setTextoCifra(e.target.value)}
                maxLength={24}
              />

              <div className="indexer-breakdown">
                {resultadoCifra.letras.length > 0 ? (
                  resultadoCifra.letras.map((item, idx) => (
                    <span key={idx} className="letter-chip">
                      <strong>{item.letra}</strong>={item.valor}
                    </span>
                  ))
                ) : (
                  <span className="empty-chip">
                    Aguardando entrada de caracteres...
                  </span>
                )}
              </div>

              <div className="indexer-output">
                <span>CHAVE NUMÉRICA CONCATENADA:</span>
                <code>{resultadoCifra.codigo}</code>
              </div>
            </div>
          </section>

          {/* Rodapé de Encaminhamento para NERA-NET */}
          <div className="pesquisas-intranet-callout">
            <div>
              <span className="mono-tag">ACESSO A DADOS BRUTOS</span>
              <h3>Procurando relatórios classificados ou fichas completas?</h3>
              <p>
                Documentos operacionais do Projeto TALASSA e do Complexo
                Bioestrutural AB-14 requerem autenticação no terminal interno.
              </p>
            </div>
            <Link to="/login" className="btn-inst-primary">
              Acessar Terminal NERA-NET →
            </Link>
          </div>
        </div>

        {/* Modal de Inspeção de Documento Público */}
        {docSelecionado && (
          <div
            className="pub-modal-backdrop"
            onClick={() => setDocSelecionado(null)}
          >
            <div
              className="pub-modal-sheet"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pub-modal-header">
                <div>
                  <span className="pub-doc-id">{docSelecionado.id}</span>
                  <span
                    className={`pub-doc-status ${docSelecionado.tipoStatus}`}
                    style={{ marginLeft: "10px" }}
                  >
                    {docSelecionado.status}
                  </span>
                </div>
                <button
                  type="button"
                  className="pub-modal-close"
                  onClick={() => setDocSelecionado(null)}
                >
                  ✕ Fechar
                </button>
              </div>

              <div className="pub-modal-content">
                <span className="pub-doc-cat">{docSelecionado.categoria}</span>
                <h2>{docSelecionado.titulo}</h2>
                <div className="pub-modal-meta">
                  <span>
                    <strong>ORIGEM:</strong> {docSelecionado.autor}
                  </span>
                  <span>
                    <strong>DATA DE REGISTRO:</strong> {docSelecionado.data}
                  </span>
                  <span>
                    <strong>INDEXAÇÃO:</strong> {docSelecionado.pistaTag}
                  </span>
                </div>

                <div className="pub-modal-paragraphs">
                  {docSelecionado.conteudoCompleto.map((paragrafo, i) => (
                    <p key={i}>{paragrafo}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
