import { faBugSlash, faDatabase, faGear, faLaptopCode, faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "antd";
import { CustomCard } from "../CustomCard";

export function SecondContainer() {
  return (
    <div className='w-screen mx-auto py-12 md:py-20 justify-center bg-deepPurple'>
      <Row className="justify-center" gutter={[0, 40]}>
        <Col xs={18} sm={18} md={{ span: 10, offset: 0 }} xl={{ span: 6, offset: 0 }}>
          <CustomCard icon={faLaptopCode} color="#50FA7B" title="Front-end" description="Realizados diversos projetos de pequeno a grande porte, mais de 5 anos atuando na stack de front-end e com sólidos conhecimentos na criação de interfaces para usuário. Utilizando bibliotecas do javacript como React, React Native e Vue." />
        </Col>

        <Col xs={18} sm={18} md={{ span: 10, offset: 2 }} xl={{ span: 6, offset: 1 }}>
          <CustomCard icon={faLaptopFile} color="#988BC7" bgColor="deepPurple" title="Back-end" description="Concluídos projetos de grande importância na carreira profissional, como migração de dados de municípios até funções de cálculo de frete em NodeJS. Manutenção de CMS utilizando .NET e C#" />
        </Col>

        <Col xs={18} sm={18} md={{ span: 10, offset: 0 }} xl={{ span: 6, offset: 1 }}>
          <CustomCard icon={faDatabase} color="#50FA7B" title="Banco de Dados" description="Conhecimento aplicado em grandes projetos utilizando a estrutura de banco de dados relacionais e não relacionais como MySQL e MongoDB." />
        </Col>

        <Col xs={18} sm={18} md={{ span: 10, offset: 2 }} xl={{ span: 6, offset: 1 }}>
          <CustomCard icon={faGear} color="#988BC7" bgColor="deepPurple" title="SEO" description="Experiência na identificação de palavras-chave, análise de dados
          e otimização técnica. Criação de estratégias que elevam a visibilidade online, garantindo resultados sólidos nos motores de busca." />
        </Col>

        <Col xs={18} sm={18} md={10} xl={{ span: 6, offset: 1 }}>
          <CustomCard icon={faBugSlash} color="#50FA7B" title="QA" description="Prática na área de testes, 1 ano atuando como QA. Criação de casos de testes com massa de dados, testes unitários, registro de não conformidades e elaboração de métricas de qualidade de software. " />
        </Col>
      </Row>
    </div >
  );
};

