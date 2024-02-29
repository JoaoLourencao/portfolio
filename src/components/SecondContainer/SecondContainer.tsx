import { faAws, faCss3, faHtml5, faNodeJs, faReact, faVuejs, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faBugSlash, faCloudArrowDown, faDatabase, faLaptopCode, faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Space, Tag } from "antd";
import { CustomCard } from "../CustomCard";

export function SecondContainer() {
  return (
    <div className='w-screen mx-auto py-12 md:py-20 justify-center bg-deepPurple'>
      <Row className="justify-center" gutter={[0, 40]}>
        <Col xs={18} sm={18} md={{ span: 10, offset: 0 }} xl={{ span: 6, offset: 0 }}>
          <CustomCard
            icon={faLaptopCode}
            iconColor="#50FA7B"
            title="Front-end"
            description="Realizados diversos projetos de pequeno a grande porte, mais de 5 anos atuando na stack de front-end e com sólidos conhecimentos na criação de interfaces para usuário."
            tags={
              <>
                <span className="font-bold">Recursos Utilizados:</span>
                <Space size={[4, 8]} wrap>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faReact} className="mr-1" />} color="#00779c">
                    ReactJS
                  </Tag>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faReact} className="mr-1" />} color="#00779c">
                    React Native
                  </Tag>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faVuejs} className="mr-1" />} color="#33976a">
                    VueJS
                  </Tag>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faHtml5} className="mr-1" />} color="#E54B20">
                    HTML
                  </Tag>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faCss3} className="mr-1" />} color="#214CE4">
                    CSS
                  </Tag>
                </Space >
              </>

            }
          />
        </Col>

        <Col xs={18} sm={18} md={{ span: 10, offset: 2 }} xl={{ span: 6, offset: 1 }}>
          <CustomCard
            icon={faLaptopFile}
            iconColor="#988BC7"
            bgColor="deepPurple"
            title="Back-end"
            description="Concluídos projetos de grande importância na carreira profissional, como migração de dados de municípios, funções de cálculo de frete e criação/manutenção de plugins para CMS."
            tags={
              <>
                <span className="font-bold">Recursos Utilizados:</span>
                <Space size={[4, 8]} wrap>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faNodeJs} className="mr-1" />} color="#4c7c30">
                    NodeJS
                  </Tag>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faWindows} className="mr-1" />} color="#5027D5">
                    .NET
                  </Tag>
                </Space>
              </>
            }
          />
        </Col>

        <Col xs={18} sm={18} md={{ span: 10, offset: 0 }} xl={{ span: 6, offset: 1 }}>
          <CustomCard
            icon={faDatabase}
            iconColor="#50FA7B"
            title="Banco de Dados"
            description="Conhecimento aplicado em grandes projetos utilizando a estrutura de banco de dados relacionais e não relacionais, além migrações com massa de dados já realizadas."
            tags={
              <>
                <span className="font-bold">Recursos Utilizados:</span>
                <Space size={[4, 8]} wrap>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faDatabase} className="mr-1" />} color="#3D6E93">
                    MySQL
                  </Tag>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faDatabase} className="mr-1" />} color="#023430">
                    MongoDB

                  </Tag>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faDatabase} className="mr-1" />} color="#C84733">
                    Oracle
                  </Tag>
                </Space>
              </>
            }
          />
        </Col>

        <Col xs={18} sm={18} md={{ span: 10, offset: 2 }} xl={{ span: 6, offset: 1 }}>
          <CustomCard
            icon={faCloudArrowDown}
            iconColor="#988BC7"
            bgColor="deepPurple"
            title="Cloud"
            description="Experiência em projetos com a utilização de serviços em nuvem, como AWS eAzure. Utilização de serviços como S3, Lambda, DevOps, Blob Storages, entre outros."
            tags={
              <>
                <span className="font-bold">Recursos Utilizados:</span>
                <Space size={[4, 8]} wrap>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faAws} className="mr-1" />} color="#f86701">
                    AWS
                  </Tag>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faWindows} className="mr-1" />} color="#0072C6">
                    Azure
                  </Tag>
                </Space>
              </>
            }
          />
        </Col>

        <Col xs={18} sm={18} md={10} xl={{ span: 6, offset: 1 }}>
          <CustomCard
            icon={faBugSlash}
            iconColor="#50FA7B"
            title="QA"
            description="Prática na área de testes, 1 ano atuando como QA. Criação de casos de testes com massa de dados, testes unitários, registro de não conformidades e elaboração de métricas de qualidade de software."
            tags={
              <>
                <span className="font-bold">Recursos Utilizados:</span>
                <Space size={[4, 8]} wrap>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faBugSlash} className="mr-1" />} color="#6E3D93">
                    Cypress
                  </Tag>
                  <Tag className="flex items-center justify-center" icon={<FontAwesomeIcon icon={faBugSlash} className="mr-1" />} color="#C84733">
                    Jest
                  </Tag>
                </Space>
              </>
            }
          />
        </Col>
      </Row>
    </div >
  );
};

