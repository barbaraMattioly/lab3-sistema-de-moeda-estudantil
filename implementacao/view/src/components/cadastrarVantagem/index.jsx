import { Box } from "@mui/system";
import {
  Typography,
  Button,
  Grid,
  TextField,
  Container,
} from "@mui/material";
import fotoDeFundo from "../../assets/task.jpg";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hook/userApi";
import { Barra } from "../navBar/index";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const CadastroVantagem = () => {
  const navigate = useNavigate();

  const [idEmpresa, setIdEmpresa] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [nome, setNome] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const idEmpresa = 1;

    const vantagem = {
      idEmpresa,
      valor: Number(valor),
      descricao,
      nome,
    };
    console.log(vantagem);

    try {
      await useApi.post("vantagem/cadastrar", vantagem);
      alert("Vantagem cadastrada com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          console.log(reader.result);
        };
        reader.readAsDataURL(file);
      });

      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  return (
    <>
      <Barra />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={5} elevation={6}>
          <Box>
            <Box
              component="form"
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "200px",
              }}
            >
              <Typography variant="h4" fontWeight="fontWeightMedium" mb={3}>
                Cadastre sua vantagem
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="nome"
                    fullWidth
                    type="text"
                    label="Nome"
                    size="small"
                    autoFocus
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    name="descricao"
                    fullWidth
                    type="text"
                    label="Descrição"
                    size="small"
                    autoFocus
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    name="valor"
                    fullWidth
                    type="number"
                    label="Valor"
                    size="small"
                    autoFocus
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Container maxWidth="sm">
                    <Box
                      variant="outlined"
                      textAlign="center"
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                      >
                        <CloudUploadIcon fontSize="large" />
                        {isDragActive ? (
                          <Typography>Solte os arquivos aqui ...</Typography>
                        ) : (
                          <Typography>
                            Arraste e solte a imagem da vantagem aqui ou clique
                            para selecionar o arquivo
                          </Typography>
                        )}
                      </Box>
                      <div>
                        {files.map((file) => (
                          <div key={file.name}>{file.name}</div>
                        ))}
                      </div>
                    </Box>
                  </Container>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#634f79",
                  color: "white",
                  "&:hover": { backgroundColor: "#6c5d80" },
                }}
                onClick={handleClick}
              >
                Cadastrar
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${fotoDeFundo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Grid>
      </Grid>
    </>
  );
};
