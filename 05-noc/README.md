# Proyecto NOC

Proyecto de Network Operation Center (NOC) construido en NodeJS utilizando TypeScript con Arquitectura Limpia

Se utiliza el patrón de repositorio

# dev
1. Clonar el archivo .env.template a .env
2. Configurar variables de entorno
```bash
  PORT=3000

  MAILER_EMAIL=
  MAILER_SECRET_KEY=

  PROD=false
```
4. Levantar las bases de datos con el comando
```bash
  docker compose up -d
```