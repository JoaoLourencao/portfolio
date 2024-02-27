import { SendOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Profile from '../../assets/img/profile2.jpg';

export function FirstContainer() {
  return (
    <div className='mx-auto py-12 md:py-20'>
      <Row className="items-center">
        <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 9, offset: 1 }} xl={{ span: 6, offset: 3 }}>
          <div className='flex justify-center md:justify-end mb-10 md:mb-0'>
            <div className="bg-comment rounded-[75px] p-1 profile-circle">
              <img src={Profile} alt="Profile Picture" width={320} height={280} className='rounded-[70px]' />
            </div>
          </div>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 10, offset: 1 }} xl={{ span: 10, offset: 1 }}>
          <div className='text-center md:text-left flex flex-col justify-between gap-4'>
            <p className='text-3xl font-bold text-purple'>Prazer, sou o João</p>
            <p className='text-4xl font-bold italic'>Desenvolvedor FullStack</p>
            <p className='text-base'>Possuo 23 anos e sou formado em <span className="font-bold text-pink">Ciência da Computação</span>, com mais de <span className="font-bold text-pink">5 anos</span> de experiência no setor de TI. Tenho um histórico comprovado na <span className="font-bold text-pink">resolução de problemas</span> e no <span className="font-bold text-pink">atendimento ao cliente</span>. Estou constantemente aprimorando minhas habilidades e sempre aberto a aprender novas tecnologias.</p>
            <div className="button-container mt-3">
              <Button size="large" className="w-full md:w-full lg:w-2/4 xl:w-1/4 text-primary font-bold" type="primary" shape="round" icon={<SendOutlined />}>Contato</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

