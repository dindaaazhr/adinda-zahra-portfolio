/* EDIT FILE INI untuk mengganti identitas, foto, pengalaman, proyek, dan kontak.
    null = belum tersedia; tautan kosong tidak diarahkan ke akun orang lain.
    Simpan foto di assets/, lalu isi photo: 'assets/namafile.jpg'. */
window.PORTFOLIO = {
  name: 'Dinda', fullName: 'Adinda Fatimah Az-Zahra', role: 'Data Analyst', photo: 'assets/dinda2.jpg',
  intro: 'The numbers have no way of speaking for themselves. We speak for them. We imbue them with meaning.',
  about: 'Master of Computer Science graduate with hands-on experience in Data Analytics and Machine Learning through academic research and industry-focused projects across retail, hospital, e-commerce, and banking. Proficient in Python, SQL, Excel, BigQuery, Looker Studio/Google Data Studio, Tableau and Power BI, with experience in A/B testing, business analysis, data visualization and dashboard development. Experienced in transforming complex data into clear performance insights and practical recommendations. I’m committed to continuous learning and delivering measurable results as part of a data team.',
  aboutNote: "",
  skills: [
    {name:'SQL',icon:'⌘',text:'Query, joins, CTE & window functions',group:'Mengolah data'},
    {name:'Python',icon:'⌁',text:'Pandas, NumPy & exploratory analysis',group:'Mengeksplorasi'},
    {name:'Spreadsheet',icon:'▦',text:'Data cleaning, pivot tables & formulas',group:'Merapikan'},
    {name:'Tableau',icon:'✣',text:'Visual storytelling & interactive dashboards',group:'Memvisualisasikan'},
    {name:'Power BI',icon:'▥',text:'Data modeling, DAX & business reporting',group:'Mengkomunikasikan'},
    {name:'Business & Statistics',icon:'↗',text:'Problem framing, hypothesis & insights',group:'Memahami konteks'}
  ],
  education: [
  {
    date: 'Aug 2024 – Jul 2026',
    title: 'Master of Computer Science — Fast Track Program',
    org: 'Universitas Brawijaya',
    text: '● **GPA: 4.0/4.0** Thesis: “Hyperparameter Optimization of a 1D-CNN-LSTM Using a Genetic Algorithm with a Combination of Technical Indicators for Stock Price Index Forecasting”.',
    publication: 'Scopus — Q4 Journal Article',
    publicationUrl: 'https://doi.org/10.21015/vtse.v14i2.2414'
  },
  {
    date: 'Aug 2021 – Jan 2025',
    title: 'Bachelor of Informatics Engineering',
    org: 'Universitas Brawijaya',
    text: '● **GPA: 3.7/4.0** Thesis: “A Neuro-Fuzzy Approach for Financial Distress Prediction in the Basic Materials Sector Using Altman Z-Score”.',
    publication: 'Scopus — Conference Paper',
    publicationUrl: 'https://doi.org/10.1109/ICoICT55899.2022.10000013'
  }
],  
  experience: [
  {
    date: 'Jan 2026 – Sep 2026',
    title: 'IT Research Assistant',
    org: 'State University of Malang',
    text: `● Developed machine learning and deep learning models for three stock forecasting research projects to support manuscript preparation for submission to Scopus-indexed journals.`
      },
      {
        date: 'Jan 2024 – Jun 2024',
        title: 'Bangkit Academy Machine Learning Cohort Internship',
        org: 'PT Bukit Vista',
        text: `● Developed a property clustering model as part of the machine learning engineering team using 876 property records and 6+ features to identify similar accommodation options.

    ● Evaluated K-Means, DBSCAN and Agglomerative Clustering to assess clustering quality. K-Means achieved a Silhouette score of 0.8806 and a Davies–Bouldin index of 0.4012.

    ● Built a recommendation system to rank similar properties by price and location to help the reservations team suggest suitable alternatives to guests.`
      }
    ],
  projects: [
  {
    id: '01',
    title: 'Early Detection of Customer Spend Decline in TokoIndo',
    category: 'Predictive Analytics',
    tool: 'Tableau',
    tags: ['SQL', 'Python', 'Tableau'],
    summary: 'Analyzed 2.60M retail transactions to identify customers at risk of a ≥30% spending decline over the next eight weeks. The ExtraTrees model achieved a test ROC-AUC of 0.711.',
    question: 'Which customers are at risk of a significant spending decline and should be prioritized for retention?',
    approach: 'Used SQL and Python to analyze spending patterns and develop a predictive model, then visualized revenue at risk and household priorities in Tableau.',
    output: 'A three-page Tableau dashboard and a retention priority list whose top 20% covered 48.4% of historical severe loss. Proposed a randomized retention pilot to evaluate spend recovery and net margin.',
    color: 'green',
    chart: 'bar',
    image: null,
    slides: null,
    tableau: null
  },
  {
    id: '02',
    title: 'Branch–Department Clinical Service Demand and Workforce Review',
    category: 'Healthcare Analytics',
    tool: 'Tableau',
    tags: ['Tableau', 'LOD Expressions', 'Workforce Analysis'],
    summary: 'Analyzed hospital service demand and doctor workloads across branches and departments to identify differences in staffing needs.',
    question: 'Which branches and departments need additional staffing support based on service demand and doctor workloads?',
    approach: 'Built an interactive Tableau dashboard using LOD expressions, calculated fields and filters to compare workload KPIs, monthly admissions and estimated bed utilization.',
    output: 'An interactive dashboard and staffing recommendations, including doctor rotation and backup coverage for departments with heavier workloads, guided by patient-days per doctor.',
    color: 'pink',
    chart: 'scatter',
    image: null,
    slides: null,
    tableau: null
  },
  {
    id: '03',
    title: 'Customer Segmentation Based on Sales Performance',
    category: 'Customer Analytics',
    tool: 'Python',
    tags: ['Python', 'K-Means', 'RFM Analysis'],
    summary: 'Segmented credit card customers using spending behavior to support targeted campaigns and retention. High-Value Active customers represented 27.6% of customers but generated nearly half of estimated net transaction profit.',
    question: 'How can customer segments inform campaign targeting, reactivation and retention strategies?',
    approach: 'Created Recency, Frequency and Monetary features in Python, applied K-Means clustering and compared customer activity and estimated profitability across segments.',
    output: 'Customer segment profiles and tailored recommendations, including reactivation rewards, card usage incentives and premium merchant benefits for high-value customers.',
    color: 'blue',
    chart: 'line',
    image: null,
    slides: null,
    tableau: null
  },
  {
    id: '04',
    title: 'RevoGrocers Category Sales Analysis',
    category: 'Retail Sales Analytics',
    tool: 'SQL',
    tags: ['SQL', 'Google BigQuery', 'Category Analysis'],
    summary: 'Analyzed retail category performance to identify promotional priorities. Confections was the leading revenue contributor at 12.87%, with a repeat purchase rate of 99.85%.',
    question: 'Which product categories should be prioritized for promotions to encourage larger purchases and repeat business?',
    approach: 'Cleaned and analyzed sales data in Google BigQuery using SQL joins, CTEs and window functions to compare category revenue and repeat purchase performance.',
    output: 'A category performance analysis and presentation recommending product bundles and targeted loyalty programs based on sales and purchasing patterns.',
    color: 'pink',
    chart: 'funnel',
    image: null,
    slides: null,
    tableau: null
  },
  {
    id: '05',
    title: 'TokoBli Campaign Strategy Comparison & Product Page A/B Test',
    category: 'Marketing & Experimentation',
    tool: 'Spreadsheet',
    tags: ['Google Sheets', 'Statistics', 'A/B Testing'],
    summary: 'Compared promotional campaign strategies and evaluated a product page A/B test. The 12/12 campaign achieved a 58.54× revenue-to-discount ratio, while the page test showed a statistically significant difference with a medium effect size.',
    question: 'Which campaign strategy should be prioritized, and does the A/B test support rolling out the new product page?',
    approach: 'Used Google Sheets and statistical analysis to compare campaign performance and evaluate the A/B test through hypothesis testing and effect size assessment.',
    output: 'Recommended the 12/12 campaign with product bundles and targeted offers, alongside a phased product page rollout to 25%, 50% and 100% of users with performance checks at each stage.',
    color: 'green',
    chart: 'experiment',
    image: null,
    slides: null,
    tableau: null
    },
    {
    id: '06',
    title: 'Heejab — Trading Management System',
    category: 'Desktop Application Development',
    tool: 'Java',
    tags: [
      'Java Swing',
      'SQL / MSSQL',
      'Database Integration',
      'GUI Design'
    ],
    summary: 'Developed a Java desktop application for trading management, using Java Swing for the graphical user interface and Microsoft SQL Server for persistent data storage.',
    question: 'How can a desktop application simplify trading data management through an accessible interface and integrated database?',
    approach: 'Designed and prototyped the interface using Java Swing, implemented event handling and error handling, and integrated Microsoft SQL Server using SQL to store and retrieve application data.',
    output: 'A desktop trading management application combining an interactive graphical interface with database integration for managing and storing trading data.',
    color: 'blue',
    chart: 'area',
    image: null,
    slides: null,
    tableau: null
  }
],
  research:[
    {id:'01',title:'Dari pertanyaan menjadi penelitian',area:'Quantitative research',summary:'Tempat untuk penelitian pertama: jelaskan pertanyaan, sumber data, metode, kontribusi pribadi, dan temuan yang dapat diverifikasi.',image:null,link:null},
    {id:'02',title:'Menghubungkan bukti & perspektif',area:'Applied research',summary:'Tempat untuk penelitian kedua: ceritakan konteks, proses analisis, keterbatasan, serta tautan publikasi atau presentasi.',image:null,link:null},
    {id:'01',title:'Dari pertanyaan menjadi penelitian',area:'Quantitative research',summary:'Tempat untuk penelitian pertama: jelaskan pertanyaan, sumber data, metode, kontribusi pribadi, dan temuan yang dapat diverifikasi.',image:null,link:null},
    {id:'02',title:'Menghubungkan bukti & perspektif',area:'Applied research',summary:'Tempat untuk penelitian kedua: ceritakan konteks, proses analisis, keterbatasan, serta tautan publikasi atau presentasi.',image:null,link:null}
  ],
  contact:{whatsapp:null,email:"dindazahra.work@gmail.com",linkedin:"https://www.linkedin.com/in/dinda-zahra/"}
};
