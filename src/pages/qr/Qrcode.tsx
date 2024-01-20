import styled from 'styled-components';
import qr from '../../assets/mz_qr.jpg';

const QrCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const QrImage = styled.img`
  width: 300px;
  height: 300px;
`;

function QrCode() {
  return (
    <QrCodeContainer>
      <QrImage src={qr} />
    </QrCodeContainer>
  );
}

export default QrCode;
