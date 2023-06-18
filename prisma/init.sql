--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3 (Debian 15.3-1.pgdg120+1)

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
    end_date timestamp(3) without time zone NOT NULL,
    closed boolean DEFAULT false NOT NULL
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
\.


--
-- Data for Name: Class; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Class" (id, "courseId", start_date, end_date, closed) FROM stdin;
1	1	2023-01-01 00:00:00	2023-04-01 00:00:00	f
2	2	2023-01-01 00:00:00	2023-04-01 00:00:00	f
3	3	2023-01-01 00:00:00	2023-04-01 00:00:00	f
4	4	2023-01-01 00:00:00	2023-04-01 00:00:00	f
\.


--
-- Data for Name: CompletedTask; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."CompletedTask" (id, completed, "userId", "courseTasksId") FROM stdin;
4	t	2	2
16	t	3	1
17	t	3	2
18	t	3	3
37	t	2	1
38	t	2	3
42	t	2	4
43	t	2	5
51	t	2	6
\.


--
-- Data for Name: Course; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Course" (id, workload, name, photo, "categoryId", description) FROM stdin;
1	120	Macuxi Digital	macuxi.png	1	Este projeto é uma ação que incentiva a presença e a atuação de meninas e mulheres na tecnologia, estimulando o acesso desse público às áreas das ciências exatas. As participantes receberão capacitação sobre pensamento computacional, habilidades de criação de apps e de divulgação profissional no LinkedIn.
2	240	Criação de Apps com Thunkable	thunkable.png	1	Capacitar pessoas, a partir de 12 anos por meio do software Thunkable, para criação de aplicativos móveis, para Android de IOS.
3	40	ABCIA	abcia.png	1	Este curso é gratuito e 100% online. Consiste em uma introdução ao universo da Inteligência Artificial (IA), especificamente, na subárea de Aprendizado de Máquina. Por esse motivo, se aplica a graduandos e profissionais de áreas da Computação ou relacionadas, bem como entusiastas de tecnologia que são de outras áreas do conhecimento.\n
4	60	Criação de Apps com Thunkable	ict.jpeg	1	Preparatório para a etapa brasileira da Huawei ICT Competition, desafio criado em 2015 para oferecer a estudantes de instituições parceiras, como a UFRR, oportunidades de estudos e intercâmbio de ideias, experiências e aprimoramento de conhecimento em Tecnologia da Informação e Comunicação (TIC), com estímulo à criatividade.\n\n
\.


--
-- Data for Name: CourseCategory; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."CourseCategory" (id, name) FROM stdin;
1	Desenvolvimento
2	Inteligência Artificial uau🤖
3	Metodologia Científica
\.


--
-- Data for Name: CourseTask; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."CourseTask" (id, title, description, external_link, "courseId") FROM stdin;
1	Atividade 1	Descrição	https://dcc-ufrr.app	1
2	Atividade 2	Descrição	https://dcc-ufrr.app	1
3	Atividade 3	Descrição	https://dcc-ufrr.app	1
4	Atividade 4	Descrição	https://dcc-ufrr.app	1
5	Atividade 5	Descrição	https://dcc-ufrr.app	1
6	Atividade 6	Descrição	https://dcc-ufrr.app	1
7	Atividade 7	Descrição	https://dcc-ufrr.app	1
8	Atividade 8	Descrição	https://dcc-ufrr.app	1
9	Atividade 9	Descrição	https://dcc-ufrr.app	1
10	Atividade 10	Descrição	https://dcc-ufrr.app	1
11	Atividade 1	Descrição	https://dcc-ufrr.app	2
12	Atividade 2	Descrição	https://dcc-ufrr.app	2
13	Atividade 3	Descrição	https://dcc-ufrr.app	2
14	Atividade 4	Descrição	https://dcc-ufrr.app	2
15	Atividade 5	Descrição	https://dcc-ufrr.app	2
16	Atividade 6	Descrição	https://dcc-ufrr.app	2
17	Atividade 7	Descrição	https://dcc-ufrr.app	2
18	Atividade 8	Descrição	https://dcc-ufrr.app	2
19	Atividade 9	Descrição	https://dcc-ufrr.app	2
20	Atividade 10	Descrição	https://dcc-ufrr.app	2
21	Atividade 1	Descrição	https://dcc-ufrr.app	3
22	Atividade 2	Descrição	https://dcc-ufrr.app	3
23	Atividade 3	Descrição	https://dcc-ufrr.app	3
24	Atividade 4	Descrição	https://dcc-ufrr.app	3
25	Atividade 5	Descrição	https://dcc-ufrr.app	3
26	Atividade 6	Descrição	https://dcc-ufrr.app	3
27	Atividade 7	Descrição	https://dcc-ufrr.app	3
28	Atividade 8	Descrição	https://dcc-ufrr.app	3
29	Atividade 9	Descrição	https://dcc-ufrr.app	3
30	Atividade 10	Descrição	https://dcc-ufrr.app	3
31	Atividade 1	Descrição	https://dcc-ufrr.app	4
32	Atividade 2	Descrição	https://dcc-ufrr.app	4
33	Atividade 3	Descrição	https://dcc-ufrr.app	4
34	Atividade 4	Descrição	https://dcc-ufrr.app	4
35	Atividade 5	Descrição	https://dcc-ufrr.app	4
36	Atividade 6	Descrição	https://dcc-ufrr.app	4
37	Atividade 7	Descrição	https://dcc-ufrr.app	4
38	Atividade 8	Descrição	https://dcc-ufrr.app	4
39	Atividade 9	Descrição	https://dcc-ufrr.app	4
40	Atividade 10	Descrição	https://dcc-ufrr.app	4
\.


--
-- Data for Name: Enrollment; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."Enrollment" (id, "classId", created_at, updated_at, "userId") FROM stdin;
1	1	2023-06-18 18:31:32.047	2023-06-18 18:31:32.047	2
2	1	2023-06-18 18:34:32.398	2023-06-18 18:34:32.398	4
3	1	2023-06-18 18:34:44.028	2023-06-18 18:34:44.028	3
4	2	2023-06-18 19:48:27.924	2023-06-18 19:48:27.924	2
5	3	2023-06-18 19:48:29.165	2023-06-18 19:48:29.165	2
6	4	2023-06-18 19:48:30.043	2023-06-18 19:48:30.043	2
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
2	hugolima	hugo8romao@gmail.com	95984230269	123	Hugo Lima	https://www.gravatar.com/avatar/2e96f6336bc01870009185a521aecc9a	UFRR	69309590	1	f
3	gui	gui@gmail.com	999999999	123	Guilherme Lucas	https://www.gravatar.com/avatar/bd001b48d731245c0abe1cacfdc1cb1d	UFRR	99999999	3	f
4	kel	kelvin@gmail.com	99999999999	123	Kelvin Araújo	https://www.gravatar.com/avatar/45e3d42e30c983aac4ea4c4a8b665599	UFRR	99999999	3	f
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
1e748ec8-b35c-49a0-a756-f63e3320b2f1	35a2c369b8fc547fc507df23c734637ac0f32da62f8682a3d87c8d6dbd2f82f7	2023-06-18 17:31:26.498865+00	20230603205300_1	\N	\N	2023-06-18 17:31:26.491653+00	1
199d20a4-7f1f-4e82-89eb-9785ee004e24	52396ee3c9c565c0dffec678c8f63ebb31e0ffe1c099299cedfb642a2da73913	2023-06-18 17:31:26.383927+00	20230530211604_1	\N	\N	2023-06-18 17:31:26.279845+00	1
b0c1d5e3-f2df-44b0-a0a0-48027216cf94	eeefce81a3c268e7191e75d587c24dfb974a61548723817af08459491e629973	2023-06-18 17:31:26.401402+00	20230530214106_1	\N	\N	2023-06-18 17:31:26.385174+00	1
3a553224-27a1-41e3-bf78-768f412b6907	5dcea21540771e4a8cd0aea3fb779c21c125638d62dfdfa14b8b4228d65d3d1d	2023-06-18 17:31:26.412125+00	20230530215302_2	\N	\N	2023-06-18 17:31:26.40263+00	1
6c67bb82-cad4-41b3-8f4c-0032385fed5b	3eaaaffa0bd31d5bb328b72d0e034311a92c164045499cb3f4abf26b983ddf02	2023-06-18 17:31:26.502736+00	20230603212257_1	\N	\N	2023-06-18 17:31:26.499849+00	1
2faf9045-fbf0-45e5-9e68-a529f1642d60	c54c65f9e4a9289f367f436b1eebafa2f3d8b16b633a5bff94d4965053e711d4	2023-06-18 17:31:26.41578+00	20230530215610_3	\N	\N	2023-06-18 17:31:26.413084+00	1
aa6b0a53-0f1b-490d-8419-d80a8edbaad7	a69f135dbcf49406b5ea0045e6388102b9134dcfea1d1d3c6e33d0a727703ac3	2023-06-18 17:31:26.420318+00	20230530230832_1	\N	\N	2023-06-18 17:31:26.416596+00	1
b86ef3eb-2279-4ce7-9f7d-f7700fd2dace	180193b37e58e94ebf937ca119dd47e0b2923db427f4a3e3509b7caf1da4d5a9	2023-06-18 17:31:26.424192+00	20230530232436_1	\N	\N	2023-06-18 17:31:26.421318+00	1
dd4b8e8b-15dc-4f43-9315-1c0162747d1f	80601832f930fe18b4ca358ac51ca429c015789813aa835a3b3fae5d866675be	2023-06-18 17:31:26.512664+00	20230603215048_	\N	\N	2023-06-18 17:31:26.503749+00	1
8bdca717-c96b-401d-bba3-b2fafde77136	735154a86b1ce8ff5cc0ed83c145ffd345bcd14629d263d2a247d8162eb31591	2023-06-18 17:31:26.435967+00	20230530235045_1	\N	\N	2023-06-18 17:31:26.425158+00	1
f5585701-1f8d-4170-8052-165a5fcbf62a	188f5e68394abbf0fd22426d28cc557eeff39fc8d6d07a8fa62a7ea36aa3a21b	2023-06-18 17:31:26.442412+00	20230531013441_1	\N	\N	2023-06-18 17:31:26.43694+00	1
53f79c4b-7b8f-4f08-9924-e402fd2ae6fb	a6c6f85018f9d058ff49cc543a7e2d09b59453f66d2645704fbe940c642bbdfc	2023-06-18 17:31:26.447257+00	20230531124928_1	\N	\N	2023-06-18 17:31:26.443586+00	1
9d864157-f61b-45f2-aea9-2770c948b31d	e98e47fb911f5e8887d3525251c0b25b7f818d8a5179a7fb116f7f42bf152f15	2023-06-18 17:31:26.515957+00	20230604165159_	\N	\N	2023-06-18 17:31:26.513517+00	1
dc83a3a5-0081-4334-a494-535490cceb63	6377cb09d6e1cd1412508c4dacff4b066dbf48b3927543259e830bed780c7f49	2023-06-18 17:31:26.469638+00	20230531125040_1	\N	\N	2023-06-18 17:31:26.448493+00	1
a4a86fd2-e6bd-4603-968d-0d68a9b51589	9777e8ea5e35d1029deb1504cf8552463649f607e7f91172493ea771427582fa	2023-06-18 17:31:26.47971+00	20230601131534_1	\N	\N	2023-06-18 17:31:26.470765+00	1
75287bde-541a-4ea6-89c6-277dc0505b34	be7fee42ac70e68fe1baf4d0f85f0f533103dde47535df347e0252cdbdeeb4f2	2023-06-18 17:31:26.484468+00	20230601131742_1	\N	\N	2023-06-18 17:31:26.480595+00	1
742f19ac-0e6b-4d2f-8b95-0c52578e3f79	8abe399331d565b351edc5292c799b3c2c496bfb634f6aacfe787890f46fa967	2023-06-18 17:31:26.519359+00	20230604165239_	\N	\N	2023-06-18 17:31:26.516789+00	1
bc0235ec-c67d-4dce-9b5f-f1ab10ce3d40	fb091432e93057e0d835ecfba3fc3ac1e1cfd19db0a11864b3542dc9ebcc9bb2	2023-06-18 17:31:26.487746+00	20230601162929_2	\N	\N	2023-06-18 17:31:26.485491+00	1
aa8ac6f4-b7c1-48af-b34f-f9e47688c734	f00424eb08976833964cde431267ebc517efb3cdc61b3aa9d40cf7089099259d	2023-06-18 17:31:26.490815+00	20230601165859_1	\N	\N	2023-06-18 17:31:26.488729+00	1
f2bbc24b-9d64-484b-97ad-af51fa1db561	761755d2b8b417e7416b591972706ad75d24d77d7bf0c22c8a7047f8edb6b592	2023-06-18 17:31:26.526792+00	20230607215712_	\N	\N	2023-06-18 17:31:26.520326+00	1
0afb56d9-7214-49dd-9315-8831c2475daf	83db3cfd9fe84df1f70aa65372a43765ff720421474c40cfe06e2474d7c1095f	2023-06-18 17:31:29.307558+00	20230618173129_	\N	\N	2023-06-18 17:31:29.302569+00	1
827becf1-6c57-41be-8874-9cdc26121975	3a6c7ecf21c12a8d0c4c6f1127d47dc5a6180bd81d3708ae657d15ad768b8ba2	2023-06-18 17:32:01.304174+00	20230618173201_	\N	\N	2023-06-18 17:32:01.297233+00	1
4eeb74d4-1b30-4adb-a0d0-04aeb95353d3	9d23211f115735656dccc43324fba651aa815d7f83c2d1153a560227b47d0651	2023-06-18 19:44:38.895782+00	20230618194438_	\N	\N	2023-06-18 19:44:38.883582+00	1
\.


--
-- Name: Certificate_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Certificate_id_seq"', 1, false);


--
-- Name: Class_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Class_id_seq"', 1, false);


--
-- Name: CompletedTask_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."CompletedTask_id_seq"', 58, true);


--
-- Name: CourseCategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."CourseCategory_id_seq"', 1, false);


--
-- Name: CourseTask_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."CourseTask_id_seq"', 1, true);


--
-- Name: Course_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Course_id_seq"', 1, false);


--
-- Name: Enrollment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Enrollment_id_seq"', 6, true);


--
-- Name: Role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."Role_id_seq"', 1, false);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public."User_id_seq"', 4, true);


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
-- PostgreSQL database dump complete
--

