USE [master]
GO
/****** Object:  Database [AskiDatabase]    Script Date: 13.10.2019 17:45:51 ******/
CREATE DATABASE [AskiDatabase]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'AskiDatabase', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\AskiDatabase.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'AskiDatabase_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\AskiDatabase_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [AskiDatabase] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [AskiDatabase].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [AskiDatabase] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [AskiDatabase] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [AskiDatabase] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [AskiDatabase] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [AskiDatabase] SET ARITHABORT OFF 
GO
ALTER DATABASE [AskiDatabase] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [AskiDatabase] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [AskiDatabase] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [AskiDatabase] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [AskiDatabase] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [AskiDatabase] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [AskiDatabase] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [AskiDatabase] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [AskiDatabase] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [AskiDatabase] SET  DISABLE_BROKER 
GO
ALTER DATABASE [AskiDatabase] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [AskiDatabase] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [AskiDatabase] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [AskiDatabase] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [AskiDatabase] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [AskiDatabase] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [AskiDatabase] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [AskiDatabase] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [AskiDatabase] SET  MULTI_USER 
GO
ALTER DATABASE [AskiDatabase] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [AskiDatabase] SET DB_CHAINING OFF 
GO
ALTER DATABASE [AskiDatabase] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [AskiDatabase] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [AskiDatabase] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [AskiDatabase] SET QUERY_STORE = OFF
GO
USE [AskiDatabase]
GO
/****** Object:  Table [dbo].[Fatura]    Script Date: 13.10.2019 17:45:52 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Fatura](
	[faturaID] [int] IDENTITY(1,1) NOT NULL,
	[aboneNo] [int] NOT NULL,
	[faturaTutari] [money] NULL,
	[ad] [nvarchar](20) NULL,
	[soyad] [nvarchar](30) NULL,
	[sonOdemeTarihi] [datetime] NULL,
	[faturaOdemeTarihi] [datetime] NULL,
	[faturaDurumu] [bit] NULL,
 CONSTRAINT [PK_Fatura] PRIMARY KEY CLUSTERED 
(
	[faturaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Fatura] ON 

INSERT [dbo].[Fatura] ([faturaID], [aboneNo], [faturaTutari], [ad], [soyad], [sonOdemeTarihi], [faturaOdemeTarihi], [faturaDurumu]) VALUES (1, 685465, 123.4000, N'Murat', N'Haydar', CAST(N'2019-09-08T00:00:00.000' AS DateTime), NULL, 0)
INSERT [dbo].[Fatura] ([faturaID], [aboneNo], [faturaTutari], [ad], [soyad], [sonOdemeTarihi], [faturaOdemeTarihi], [faturaDurumu]) VALUES (2, 685466, 87.6000, N'Kemal', N'Kara', CAST(N'2019-08-18T00:00:00.000' AS DateTime), NULL, 0)
INSERT [dbo].[Fatura] ([faturaID], [aboneNo], [faturaTutari], [ad], [soyad], [sonOdemeTarihi], [faturaOdemeTarihi], [faturaDurumu]) VALUES (3, 685467, 54.7000, N'Anıl', N'Er', CAST(N'2019-07-18T00:00:00.000' AS DateTime), NULL, 0)
INSERT [dbo].[Fatura] ([faturaID], [aboneNo], [faturaTutari], [ad], [soyad], [sonOdemeTarihi], [faturaOdemeTarihi], [faturaDurumu]) VALUES (4, 685468, 43.5000, N'Mehmet', N'Kasap', CAST(N'2019-06-18T00:00:00.000' AS DateTime), NULL, 0)
INSERT [dbo].[Fatura] ([faturaID], [aboneNo], [faturaTutari], [ad], [soyad], [sonOdemeTarihi], [faturaOdemeTarihi], [faturaDurumu]) VALUES (5, 685465, 25.7000, N'Murat', N'Haydar', CAST(N'2019-06-18T00:00:00.000' AS DateTime), NULL, 0)
SET IDENTITY_INSERT [dbo].[Fatura] OFF
USE [master]
GO
ALTER DATABASE [AskiDatabase] SET  READ_WRITE 
GO
