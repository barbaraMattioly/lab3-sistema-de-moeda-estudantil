import { Typography} from '@mui/material';
import {Barra} from '../navBar/index';


export const Home = () => {
    return (
        <>
        <Barra/>
        <Typography variant="h6">
          Acumule moedas e escolha seu prêmio como descontos, materiais escolares, livros ou voucher em restaurantes.
        </Typography>
        </>
    );
}