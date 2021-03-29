-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2021 a las 04:23:38
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `andraste_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `categoria_id` int(99) NOT NULL,
  `descripcion` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`categoria_id`, `descripcion`) VALUES
(1, 'SUPERIOR'),
(2, 'INFERIOR'),
(3, 'VESTIDO'),
(4, 'CALZADO'),
(5, 'ROPA_INTERIOR'),
(6, 'ACCESORIOS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `estado_id` int(99) NOT NULL,
  `descripcion` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`estado_id`, `descripcion`) VALUES
(1, 'NUEVO'),
(2, 'EXCELENTE_ESTADO'),
(3, 'BUEN_ESTADO'),
(4, 'CON_DETALLES');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prenda`
--

CREATE TABLE `prenda` (
  `prenda_id` int(99) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `categoria` int(99) NOT NULL,
  `estado` int(99) NOT NULL,
  `rango_etario` int(99) NOT NULL,
  `donante` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_donacion` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `imagen` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `prenda`
--

INSERT INTO `prenda` (`prenda_id`, `nombre`, `categoria`, `estado`, `rango_etario`, `donante`, `fecha_donacion`, `imagen`) VALUES
(4, 'REMERA NEGRA ', 1, 1, 3, '0', '2021-3-2', NULL),
(5, 'PANTALON', 2, 4, 3, '0', '2021-3-2', NULL),
(6, 'REMERA NEGRA ', 1, 1, 1, '0', '2021-3-2', NULL),
(7, 'PULLOVER', 1, 2, 1, 'AAN', '2021-3-2', NULL),
(8, 'REMERA ROJA', 1, 3, 4, 'YOSE', '2021-3-2', NULL),
(9, 'REMERA AZUL', 1, 1, 1, 'RAMON', '2021-3-2', NULL),
(10, 'SHORT', 2, 3, 3, 'ELI', '2021-3-2', NULL),
(11, 'SHORT', 2, 3, 3, 'ELI', '2021-3-2', NULL),
(12, 'PULLOVER', 1, 2, 1, 'DFDF', '2021-3-2', NULL),
(13, 'BARBIJO', 6, 4, 4, 'ALEJO', '2021-3-2', NULL),
(14, 'BARBIJO', 6, 4, 3, 'EUGE', '2021-3-2', NULL),
(15, 'LDJFLSKF', 1, 1, 1, 'FMLSDFJK', '2021-3-2', NULL),
(16, 'BARBIJO SUPER GENIAL', 6, 3, 2, 'HUGO', '2021-3-2', NULL),
(17, 'UYUYUYU', 1, 1, 1, 'YOOOOOO', '2021-3-2', NULL),
(18, 'MUSCULOSA', 1, 4, 2, 'JUIANA YO', '2021-3-2', NULL),
(19, 'REMERA NEGRA ', 1, 1, 1, 'MARIANO', '2021-3-3', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rango_etario`
--

CREATE TABLE `rango_etario` (
  `id_rangoetario` int(99) NOT NULL,
  `descripcion` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `rango_etario`
--

INSERT INTO `rango_etario` (`id_rangoetario`, `descripcion`) VALUES
(1, 'NIÑE'),
(2, 'ADOLESCENTE'),
(3, 'ADULTO'),
(4, 'ANCIANO');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`estado_id`);

--
-- Indices de la tabla `prenda`
--
ALTER TABLE `prenda`
  ADD PRIMARY KEY (`prenda_id`),
  ADD KEY `categoria` (`categoria`),
  ADD KEY `estado` (`estado`),
  ADD KEY `rango_etario` (`rango_etario`);

--
-- Indices de la tabla `rango_etario`
--
ALTER TABLE `rango_etario`
  ADD PRIMARY KEY (`id_rangoetario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `categoria_id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `estado_id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `prenda`
--
ALTER TABLE `prenda`
  MODIFY `prenda_id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `rango_etario`
--
ALTER TABLE `rango_etario`
  MODIFY `id_rangoetario` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prenda`
--
ALTER TABLE `prenda`
  ADD CONSTRAINT `prenda_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`categoria_id`),
  ADD CONSTRAINT `prenda_ibfk_2` FOREIGN KEY (`estado`) REFERENCES `estado` (`estado_id`),
  ADD CONSTRAINT `prenda_ibfk_3` FOREIGN KEY (`rango_etario`) REFERENCES `rango_etario` (`id_rangoetario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
