--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg110+1)
-- Dumped by pg_dump version 15.3 (Debian 15.3-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: admin
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO admin;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: admin
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Certificate; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Certificate" (
    id integer NOT NULL,
    "classId" integer NOT NULL,
    "userId" integer NOT NULL,
    uuid text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Certificate" OWNER TO admin;

--
-- Name: Certificate_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."Certificate_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Certificate_id_seq" OWNER TO admin;

--
-- Name: Certificate_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."Certificate_id_seq" OWNED BY public."Certificate".id;


--
-- Name: Class; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Class" (
    id integer NOT NULL,
    "courseId" integer NOT NULL,
    start_date timestamp(3) without time zone NOT NULL,
    end_date timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Class" OWNER TO admin;

--
-- Name: Class_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."Class_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Class_id_seq" OWNER TO admin;

--
-- Name: Class_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."Class_id_seq" OWNED BY public."Class".id;


--
-- Name: CompletedTask; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."CompletedTask" (
    id integer NOT NULL,
    completed boolean NOT NULL,
    "userId" integer NOT NULL,
    "courseTasksId" integer
);


ALTER TABLE public."CompletedTask" OWNER TO admin;

--
-- Name: CompletedTask_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."CompletedTask_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CompletedTask_id_seq" OWNER TO admin;

--
-- Name: CompletedTask_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."CompletedTask_id_seq" OWNED BY public."CompletedTask".id;


--
-- Name: Course; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Course" (
    id integer NOT NULL,
    workload integer NOT NULL,
    name character varying(255) NOT NULL,
    photo character varying(255) NOT NULL,
    "categoryId" integer NOT NULL,
    description text NOT NULL
);


ALTER TABLE public."Course" OWNER TO admin;

--
-- Name: CourseCategory; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."CourseCategory" (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public."CourseCategory" OWNER TO admin;

--
-- Name: CourseCategory_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."CourseCategory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CourseCategory_id_seq" OWNER TO admin;

--
-- Name: CourseCategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."CourseCategory_id_seq" OWNED BY public."CourseCategory".id;


--
-- Name: CourseStatus; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."CourseStatus" (
    id integer NOT NULL,
    status_name character varying(255) NOT NULL
);


ALTER TABLE public."CourseStatus" OWNER TO admin;

--
-- Name: CourseStatus_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."CourseStatus_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CourseStatus_id_seq" OWNER TO admin;

--
-- Name: CourseStatus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."CourseStatus_id_seq" OWNED BY public."CourseStatus".id;


--
-- Name: CourseTask; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."CourseTask" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    external_link text NOT NULL,
    "courseId" integer NOT NULL
);


ALTER TABLE public."CourseTask" OWNER TO admin;

--
-- Name: CourseTask_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."CourseTask_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CourseTask_id_seq" OWNER TO admin;

--
-- Name: CourseTask_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."CourseTask_id_seq" OWNED BY public."CourseTask".id;


--
-- Name: Course_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."Course_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Course_id_seq" OWNER TO admin;

--
-- Name: Course_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."Course_id_seq" OWNED BY public."Course".id;


--
-- Name: Enrollment; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Enrollment" (
    id integer NOT NULL,
    "classId" integer NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."Enrollment" OWNER TO admin;

--
-- Name: Enrollment_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."Enrollment_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Enrollment_id_seq" OWNER TO admin;

--
-- Name: Enrollment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."Enrollment_id_seq" OWNED BY public."Enrollment".id;


--
-- Name: Role; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."Role" (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public."Role" OWNER TO admin;

--
-- Name: Role_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."Role_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Role_id_seq" OWNER TO admin;

--
-- Name: Role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."Role_id_seq" OWNED BY public."Role".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    mail character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    full_name character varying(255) NOT NULL,
    photo character varying(255) NOT NULL,
    institution character varying(255) NOT NULL,
    postal_code character varying(255) NOT NULL,
    "roleId" integer DEFAULT 3 NOT NULL,
    suspended boolean DEFAULT false NOT NULL
);


ALTER TABLE public."User" OWNER TO admin;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO admin;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO admin;

--
-- Name: Certificate id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Certificate" ALTER COLUMN id SET DEFAULT nextval('public."Certificate_id_seq"'::regclass);


--
-- Name: Class id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Class" ALTER COLUMN id SET DEFAULT nextval('public."Class_id_seq"'::regclass);


--
-- Name: CompletedTask id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CompletedTask" ALTER COLUMN id SET DEFAULT nextval('public."CompletedTask_id_seq"'::regclass);


--
-- Name: Course id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Course" ALTER COLUMN id SET DEFAULT nextval('public."Course_id_seq"'::regclass);


--
-- Name: CourseCategory id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CourseCategory" ALTER COLUMN id SET DEFAULT nextval('public."CourseCategory_id_seq"'::regclass);


--
-- Name: CourseStatus id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CourseStatus" ALTER COLUMN id SET DEFAULT nextval('public."CourseStatus_id_seq"'::regclass);


--
-- Name: CourseTask id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CourseTask" ALTER COLUMN id SET DEFAULT nextval('public."CourseTask_id_seq"'::regclass);


--
-- Name: Enrollment id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Enrollment" ALTER COLUMN id SET DEFAULT nextval('public."Enrollment_id_seq"'::regclass);


--
-- Name: Role id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Role" ALTER COLUMN id SET DEFAULT nextval('public."Role_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Certificate; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Certificate" (id, "classId", "userId", uuid, "createdAt") FROM stdin;
6	5	1	jYjFzQs3uwKLjLMa4eW7b7	2023-06-04 16:52:56.953
\.


--
-- Data for Name: Class; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Class" (id, "courseId", start_date, end_date) FROM stdin;
5	6	2023-06-03 00:00:00	2023-06-29 00:00:00
16	14	2023-06-01 04:00:00	2023-06-28 04:00:00
17	15	2023-06-01 04:00:00	2023-07-31 04:00:00
18	16	2023-06-01 04:00:00	2023-08-31 04:00:00
\.


--
-- Data for Name: CompletedTask; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."CompletedTask" (id, completed, "userId", "courseTasksId") FROM stdin;
17	t	1	2
20	t	1	3
24	t	1	1
\.


--
-- Data for Name: Course; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Course" (id, workload, name, photo, "categoryId", description) FROM stdin;
6	60	Macuxi Digital	macuxi.png	1	Este projeto é uma ação que incentiva a presença e a atuação de meninas e mulheres na tecnologia, estimulando o acesso desse público às áreas das ciências exatas. As participantes receberão capacitação sobre pensamento computacional, habilidades de criação de apps e de divulgação profissional no LinkedIn.
15	120	Intensivo ICT competition	ict.jpeg	1	Preparatório para a etapa brasileira da Huawei ICT Competition, desafio criado em 2015 para oferecer a estudantes de instituições parceiras, como a UFRR, oportunidades de estudos e intercâmbio de ideias, experiências e aprimoramento de conhecimento em Tecnologia da Informação e Comunicação (TIC), com estímulo à criatividade.\n\n
16	240	Criação de Apps com Thunkable	thunkable.png	1	Capacitar pessoas, a partir de 12 anos por meio do software Thunkable, para criação de aplicativos móveis, para Android de IOS.
14	50	ABCIA	abcia.png	4	Este curso é gratuito e 100% online. Consiste em uma introdução ao universo da Inteligência Artificial (IA), especificamente, na subárea de Aprendizado de Máquina. Por esse motivo, se aplica a graduandos e profissionais de áreas da Computação ou relacionadas, bem como entusiastas de tecnologia que são de outras áreas do conhecimento.\n
\.


--
-- Data for Name: CourseCategory; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."CourseCategory" (id, name) FROM stdin;
2	Design
4	Inteligência Artificial uau🤖
1	Desenvolvimento
\.


--
-- Data for Name: CourseStatus; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."CourseStatus" (id, status_name) FROM stdin;
\.


--
-- Data for Name: CourseTask; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."CourseTask" (id, title, description, external_link, "courseId") FROM stdin;
1	Link do curso	Descrição	https://www.youtube.com/@cursoabcia	6
2	Atividade 1	Descrição	https://www.youtube.com/@cursoabcia	6
3	Atividade 1	Descrição	https://www.youtube.com/@cursoabcia	6
5	Link da live de abertura	descrição	https://www.youtube.com/live/xjJRw6kQpFo?feature=share	14
6	Módulo 01 - Aula 01: Introdução à Inteligência Artificial	descrição	https://youtu.be/f7EBg7sMluQ	14
7	Módulo 02 - Aula 01: Machine Learning	descrição	https://youtu.be/1zRcPvJVdqQ	14
8	Prova Final	prova	https://sites.google.com/view/abcia/	14
9	Tarefa de teste	descrição	https://dcc-ufrr.app	15
10	Tarefa de teste	teste	https://dcc-ufrr.app	16
\.


--
-- Data for Name: Enrollment; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Enrollment" (id, "classId", created_at, updated_at, "userId") FROM stdin;
16	5	2023-05-31 01:28:04.725	2023-05-31 01:28:04.725	1
52	16	2023-06-11 03:03:05.504	2023-06-11 03:03:05.504	1
53	17	2023-06-11 03:04:38.134	2023-06-11 03:04:38.134	1
54	18	2023-06-11 03:04:41.109	2023-06-11 03:04:41.109	1
\.


--
-- Data for Name: Role; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Role" (id, name) FROM stdin;
1	Root
2	Administrador
3	Estudante
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."User" (id, username, mail, phone, password, full_name, photo, institution, postal_code, "roleId", suspended) FROM stdin;
1	hugolima	hugo8romao@gmail.com	5595984230269	123	Hugo Lima Romão	https://en.gravatar.com/userimage/190721742/cd8880350cceaded5ecf954eb4522c58.jpeg	UFRR	69309590	1	f
2	admin	admin@admin.com	999999999999	123	Administrador	https://www.gravatar.com/avatar/admin	UFRR	99999999	1	f
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
93de60f0-d211-4db7-9977-18612fa8e0cd	35a2c369b8fc547fc507df23c734637ac0f32da62f8682a3d87c8d6dbd2f82f7	2023-06-03 20:53:00.6717+00	20230603205300_1	\N	\N	2023-06-03 20:53:00.650615+00	1
4b2a9226-74da-4653-970a-17906aaad815	52396ee3c9c565c0dffec678c8f63ebb31e0ffe1c099299cedfb642a2da73913	2023-05-30 21:16:04.457986+00	20230530211604_1	\N	\N	2023-05-30 21:16:04.358789+00	1
88cdc943-8a91-4193-8f1e-7671916eb4b7	eeefce81a3c268e7191e75d587c24dfb974a61548723817af08459491e629973	2023-05-30 21:41:06.48993+00	20230530214106_1	\N	\N	2023-05-30 21:41:06.470425+00	1
ae1b6a6a-a395-4bde-93e1-8766da0481eb	5dcea21540771e4a8cd0aea3fb779c21c125638d62dfdfa14b8b4228d65d3d1d	2023-05-30 21:53:02.97998+00	20230530215302_2	\N	\N	2023-05-30 21:53:02.967098+00	1
66613143-c86e-4751-86c5-f8b02bebe651	3eaaaffa0bd31d5bb328b72d0e034311a92c164045499cb3f4abf26b983ddf02	2023-06-03 21:22:57.891135+00	20230603212257_1	\N	\N	2023-06-03 21:22:57.884+00	1
fd5198a8-0f27-41c7-a965-63b6b3e3c826	c54c65f9e4a9289f367f436b1eebafa2f3d8b16b633a5bff94d4965053e711d4	2023-05-30 21:56:10.616924+00	20230530215610_3	\N	\N	2023-05-30 21:56:10.612091+00	1
27ad68a4-30a7-438c-82ee-57080678c567	a69f135dbcf49406b5ea0045e6388102b9134dcfea1d1d3c6e33d0a727703ac3	2023-05-30 23:08:32.366923+00	20230530230832_1	\N	\N	2023-05-30 23:08:32.357148+00	1
d25856fa-e191-4002-a64b-11c2c675d5d5	180193b37e58e94ebf937ca119dd47e0b2923db427f4a3e3509b7caf1da4d5a9	2023-05-30 23:24:36.520458+00	20230530232436_1	\N	\N	2023-05-30 23:24:36.5151+00	1
34f52670-842e-4acc-b444-a6ed6b3e6792	80601832f930fe18b4ca358ac51ca429c015789813aa835a3b3fae5d866675be	2023-06-03 21:50:48.765312+00	20230603215048_	\N	\N	2023-06-03 21:50:48.7535+00	1
b3fa0102-398b-4f2a-bfa6-53b4d1620274	735154a86b1ce8ff5cc0ed83c145ffd345bcd14629d263d2a247d8162eb31591	2023-05-30 23:50:45.083686+00	20230530235045_1	\N	\N	2023-05-30 23:50:45.065873+00	1
43135ddd-7ee0-4e2c-9290-588e02426c77	188f5e68394abbf0fd22426d28cc557eeff39fc8d6d07a8fa62a7ea36aa3a21b	2023-05-31 01:34:41.515626+00	20230531013441_1	\N	\N	2023-05-31 01:34:41.504044+00	1
8ed8d5f6-1f7b-4898-a39a-aea34c193719	a6c6f85018f9d058ff49cc543a7e2d09b59453f66d2645704fbe940c642bbdfc	2023-05-31 12:49:28.212059+00	20230531124928_1	\N	\N	2023-05-31 12:49:28.197475+00	1
767fd82d-5872-490b-938f-6b0c7ae50c91	e98e47fb911f5e8887d3525251c0b25b7f818d8a5179a7fb116f7f42bf152f15	2023-06-04 16:51:59.734736+00	20230604165159_	\N	\N	2023-06-04 16:51:59.728326+00	1
3c132a1f-4c48-43a7-a43f-bb35eb11c37b	6377cb09d6e1cd1412508c4dacff4b066dbf48b3927543259e830bed780c7f49	2023-05-31 12:50:41.009145+00	20230531125040_1	\N	\N	2023-05-31 12:50:40.977384+00	1
396d835f-4e11-4050-a964-da8304b976e2	9777e8ea5e35d1029deb1504cf8552463649f607e7f91172493ea771427582fa	2023-06-01 13:15:34.981129+00	20230601131534_1	\N	\N	2023-06-01 13:15:34.955263+00	1
65119ec2-7c80-4360-8bd1-1add4d8d9271	be7fee42ac70e68fe1baf4d0f85f0f533103dde47535df347e0252cdbdeeb4f2	2023-06-01 13:17:42.976474+00	20230601131742_1	\N	\N	2023-06-01 13:17:42.967377+00	1
1ccb5b04-c1e8-4f76-a369-f7422262a58b	8abe399331d565b351edc5292c799b3c2c496bfb634f6aacfe787890f46fa967	2023-06-04 16:52:39.964816+00	20230604165239_	\N	\N	2023-06-04 16:52:39.955112+00	1
fae800c1-8e4e-48f8-9c13-10850e052c69	fb091432e93057e0d835ecfba3fc3ac1e1cfd19db0a11864b3542dc9ebcc9bb2	2023-06-01 16:29:29.289869+00	20230601162929_2	\N	\N	2023-06-01 16:29:29.278841+00	1
880948ae-2038-4f96-acf5-8445656e3d9c	f00424eb08976833964cde431267ebc517efb3cdc61b3aa9d40cf7089099259d	2023-06-01 16:58:59.531262+00	20230601165859_1	\N	\N	2023-06-01 16:58:59.526014+00	1
65f06a09-bfbe-46e4-86d3-d3ed7b454282	761755d2b8b417e7416b591972706ad75d24d77d7bf0c22c8a7047f8edb6b592	2023-06-11 02:23:32.830825+00	20230607215712_	\N	\N	2023-06-11 02:23:32.818678+00	1
\.


--
-- Name: Certificate_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Certificate_id_seq"', 38, true);


--
-- Name: Class_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Class_id_seq"', 18, true);


--
-- Name: CompletedTask_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."CompletedTask_id_seq"', 53, true);


--
-- Name: CourseCategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."CourseCategory_id_seq"', 12, true);


--
-- Name: CourseStatus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."CourseStatus_id_seq"', 1, false);


--
-- Name: CourseTask_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."CourseTask_id_seq"', 10, true);


--
-- Name: Course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Course_id_seq"', 14, true);


--
-- Name: Enrollment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Enrollment_id_seq"', 54, true);


--
-- Name: Role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Role_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."User_id_seq"', 39, true);


--
-- Name: Certificate Certificate_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Certificate"
    ADD CONSTRAINT "Certificate_pkey" PRIMARY KEY (id);


--
-- Name: Class Class_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Class"
    ADD CONSTRAINT "Class_pkey" PRIMARY KEY (id);


--
-- Name: CompletedTask CompletedTask_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CompletedTask"
    ADD CONSTRAINT "CompletedTask_pkey" PRIMARY KEY (id);


--
-- Name: CourseCategory CourseCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CourseCategory"
    ADD CONSTRAINT "CourseCategory_pkey" PRIMARY KEY (id);


--
-- Name: CourseStatus CourseStatus_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CourseStatus"
    ADD CONSTRAINT "CourseStatus_pkey" PRIMARY KEY (id);


--
-- Name: CourseTask CourseTask_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CourseTask"
    ADD CONSTRAINT "CourseTask_pkey" PRIMARY KEY (id);


--
-- Name: Course Course_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Course"
    ADD CONSTRAINT "Course_pkey" PRIMARY KEY (id);


--
-- Name: Enrollment Enrollment_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Enrollment"
    ADD CONSTRAINT "Enrollment_pkey" PRIMARY KEY (id);


--
-- Name: Role Role_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Role"
    ADD CONSTRAINT "Role_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Certificate_userId_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE INDEX "Certificate_userId_key" ON public."Certificate" USING btree ("userId");


--
-- Name: Certificate_uuid_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE UNIQUE INDEX "Certificate_uuid_key" ON public."Certificate" USING btree (uuid);


--
-- Name: User_username_key; Type: INDEX; Schema: public; Owner: admin
--

CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);


--
-- Name: Certificate Certificate_classId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Certificate"
    ADD CONSTRAINT "Certificate_classId_fkey" FOREIGN KEY ("classId") REFERENCES public."Class"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Certificate Certificate_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Certificate"
    ADD CONSTRAINT "Certificate_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Class Class_courseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Class"
    ADD CONSTRAINT "Class_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES public."Course"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CompletedTask CompletedTask_courseTasksId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CompletedTask"
    ADD CONSTRAINT "CompletedTask_courseTasksId_fkey" FOREIGN KEY ("courseTasksId") REFERENCES public."CourseTask"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: CompletedTask CompletedTask_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CompletedTask"
    ADD CONSTRAINT "CompletedTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CourseTask CourseTask_courseId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."CourseTask"
    ADD CONSTRAINT "CourseTask_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES public."Course"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Course Course_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Course"
    ADD CONSTRAINT "Course_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."CourseCategory"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Enrollment Enrollment_classId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Enrollment"
    ADD CONSTRAINT "Enrollment_classId_fkey" FOREIGN KEY ("classId") REFERENCES public."Class"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Enrollment Enrollment_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."Enrollment"
    ADD CONSTRAINT "Enrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: User User_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public."Role"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: admin
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

