// Media dona: Masculino
new Chart(document.getElementById("masculinoChart"), {
  type: "doughnut",
  data: {
    labels: ["Masculino"],
    datasets: [
      {
        data: [80, 20], // 120 masculino de un total de 335
        backgroundColor: ["#2196F3", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// Media dona: Femenino
new Chart(document.getElementById("femeninoChart"), {
  type: "doughnut",
  data: {
    labels: ["Femenino"],
    datasets: [
      {
        data: [95, 240], // 95 femenino de un total de 335
        backgroundColor: ["#E91E63", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// Doughnut: Atendidos vs
new Chart(document.getElementById("asistenciasChartAtendidos"), {
  type: "doughnut",
  data: {
    labels: ["Atendidos"],
    datasets: [
      {
        data: [180, 35],
        backgroundColor: ["#2196F3", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});
//Doughnut: No Asistidos
new Chart(document.getElementById("asistenciasChartNoAsistidos"), {
  type: "doughnut",
  data: {
    labels: ["No Asistidos"],
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ["#E91E63", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// Doughnut: Tipo de PRE
new Chart(document.getElementById("emoChartPre"), {
  type: "doughnut",
  data: {
    labels: ["PRE"],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["#a91ee9ff", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// Doughnut: Tipo de EGRESO
new Chart(document.getElementById("emoChartEgreso"), {
  type: "doughnut",
  data: {
    labels: ["EGRESO"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#dce91eff", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
          // Esto evitará que se apilen por ancho
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// Doughnut: Tipo de ANUAL
new Chart(document.getElementById("emoChartAnual"), {
  type: "doughnut",
  data: {
    labels: ["ANUAL"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#14ec55ff", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// Doughnut: Aptitud APTO
new Chart(document.getElementById("aptitudChartApto"), {
  type: "doughnut",
  data: {
    labels: ["APTO"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#d40b0bff", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },

  options: {
    responsive: true,
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// Doughnut: Aptitud APTO RES
new Chart(document.getElementById("aptitudChartAptoRes"), {
  type: "doughnut",
  data: {
    labels: ["APTO RES"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#da5c08ff", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },

  options: {
    responsive: true,
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// Doughnut: Aptitud NO APTO
new Chart(document.getElementById("aptitudChartNoApto"), {
  type: "doughnut",
  data: {
    labels: ["NO APTO"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#af2e93ff", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },

  options: {
    responsive: true,
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

// Doughnut: Aptitud OBSERVADO
new Chart(document.getElementById("aptitudChartObservado"), {
  type: "doughnut",
  data: {
    labels: ["OBSERVADO"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#c98c1cff", "#e0e0e0"],
        borderWidth: 0,
        hoverOffset: 4,
        borderWidth: 3,
      },
    ],
  },

  options: {
    responsive: true,
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});

/* new Chart(document.getElementById("barrasMesChart"), {
  type: "scatter",
  data: {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        type: "bar",
        label: "Atenciones",
        data: [15, 30, 25, 20, 35, 40, 38, 22, 30, 50, 45, 28],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        datalabels: {
          display: true,
          anchor: "end",
          align: "top",
          color: "#4B5563", // gris oscuro suave
          font: {
            size: 13,
            weight: "bold",
            family: "Arial", // o 'Poppins', 'Roboto', etc. si tienes cargado Google Fonts
          },
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: 6,
          padding: {
            top: 6,
            bottom: 4,
            left: 8,
            right: 8,
          },
          borderWidth: 1,
          borderColor: "#D1D5DB", // gris claro
          formatter: (value) => `${value}`, // puedes personalizar con texto
        },
      },
      {
        type: "line",
        label: "Atenciones Línea",
        data: [15, 30, 25, 20, 35, 40, 38, 22, 30, 50, 45, 28],
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        tension: 0.3,
        datalabels: {
          display: false, // ❌ sin etiquetas en la línea
        },
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        clip: false, // 👈 asegura que no se recorten las etiquetas fuera del canvas
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false, // 👈 Esto oculta las líneas del eje Y
      },
    },
  },
  plugins: [ChartDataLabels],
}); */

new Chart(document.getElementById("barrasMesChart"), {
  type: "bar",
  data: {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "Atenciones",
        data: [15, 30, 25, 20, 35, 40, 38, 22, 30, 50, 45, 28],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        datalabels: {
          display: true,
          anchor: "end",
          align: "top",
          color: "#000",
          font: {
            size: 13,
            weight: "bold",
            family: "Arial",
          },
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: 6,
          padding: {
            top: 6,
            bottom: 4,
            left: 8,
            right: 8,
          },
          borderWidth: 1,
          borderColor: "#D1D5DB", // gris claro
          formatter: (value) => `${value}`, // puedes personalizar con texto
        },
      },
      {
        type: "line",
        label: "Tendencia",
        display: false,
        data: [15, 30, 25, 20, 35, 40, 38, 22, 30, 50, 45, 28],
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 4,
        fill: false,
        pointRadius: 3,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: {
        display: false,
        anchor: "end",
        align: "top",
        color: "#000",
        font: {
          size: 12,
          weight: "bold",
        },
        formatter: (value) => value,
      },
    },
    scales: {
      x: {
        grid: { display: false }, // ❌ Oculta línea del eje X
        ticks: { display: true }, // ✅ Muestra etiquetas del eje X
      },
      y: {
        grid: { display: false }, // ❌ Oculta líneas del eje Y
        ticks: { display: false }, // ✅ Muestra números del eje Y
      },
    },
  },
  plugins: [ChartDataLabels], // 👈 Asegúrate de cargar esto
});

// Barras: Atenciones por mes
/* new Chart(document.getElementById("barrasMesChart"), {
  type: "scatter",

  data: {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        type: "bar",
        label: "Atenciones",
        data: [15, 30, 25, 20, 35, 40, 38, 22, 30, 50, 45, 28],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
      {
        type: "line",
        label: "Atenciones",
        data: [15, 30, 25, 20, 35, 40, 38, 22, 30, 50, 45, 28],
        borderColor: ["rgb(54, 162, 235)"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 10,
          padding: 15,
          usePointStyle: true, // íconos tipo punto en lugar de cuadrados
          textAlign: "center",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
 */
