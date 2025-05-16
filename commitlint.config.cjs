module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // ✨ nova funcionalidade
        "fix", // 🐛 correção de bug
        "docs", // 📝 documentação
        "style", // 💄 formatação, estilo, identação
        "refactor", // ♻️ refatoração
        "test", // ✅ testes
        "chore", // 🔧 tarefas gerais
        "perf", // ⚡️ performance
        "ci", // 👷 automações
        "revert", // ⏪ revert
        "build", // 🏗️ build system
      ],
    ],
  },
};
