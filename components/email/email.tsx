import {
  Html,
  Body,
  Container,
  Text,
  Section,
  Hr,
  Head,
  Preview,
  Img,
} from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({ name, email, message }: EmailProps) {
  return (
    <Html lang="es">
      <Head />
      <Preview>Nuevo mensaje de {name} desde el formulario de contacto</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://shirostudio.co/logo.svg"
              alt="Shiro Studio"
              width="100"
              height="31"
            />
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={title}>Nuevo mensaje de contacto</Text>
            <Text style={subtitle}>
              Alguien completó el formulario en tu sitio web.
            </Text>

            <Hr style={divider} />

            {/* Sender info */}
            <Section style={infoRow}>
              <Text style={infoLabel}>Nombre</Text>
              <Text style={infoValue}>{name}</Text>
            </Section>

            <Section style={infoRow}>
              <Text style={infoLabel}>Email</Text>
              <Text style={infoValue}>{email}</Text>
            </Section>

            <Hr style={divider} />

            {/* Message */}
            <Text style={infoLabel}>Mensaje</Text>
            <Text style={messageText}>{message}</Text>

            <Hr style={divider} />

            <Text style={footer}>
              Podés responder directamente a este email para contestarle a{" "}
              {name}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body: React.CSSProperties = {
  backgroundColor: "#f4f3ee",
  fontFamily: "'Montserrat', Helvetica, Arial, sans-serif",
  padding: "32px 16px",
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  maxWidth: "560px",
  margin: "0 auto",
  overflow: "hidden",
};

const header: React.CSSProperties = {
  backgroundColor: "#212121",
  padding: "24px 32px",
};

const content: React.CSSProperties = {
  padding: "32px",
};

const title: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#212121",
  margin: "0 0 6px",
};

const subtitle: React.CSSProperties = {
  fontSize: "14px",
  color: "#616161",
  margin: "0",
};

const divider: React.CSSProperties = {
  borderColor: "#e9e8e0",
  margin: "20px 0",
};

const infoRow: React.CSSProperties = {
  marginBottom: "12px",
};

const infoLabel: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#616161",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0 0 4px",
};

const infoValue: React.CSSProperties = {
  fontSize: "15px",
  color: "#212121",
  margin: "0",
};

const messageText: React.CSSProperties = {
  fontSize: "15px",
  color: "#212121",
  lineHeight: "1.65",
  margin: "8px 0 0",
  whiteSpace: "pre-wrap" as const,
};

const footer: React.CSSProperties = {
  fontSize: "13px",
  color: "#616161",
  margin: "0",
};
