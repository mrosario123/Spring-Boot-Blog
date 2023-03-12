var navbar =
<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand">48</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  th:href="@{'/'}" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end" sec:authorize="!isAuthenticated()">
        <a th:href="@{/register}" class="btn btn-primary" role="button">Register</a>
        <a th:href="@{/login}" class="btn btn-primary" role="button">Login</a>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end" sec:authorize="isAuthenticated()">
        <div sec:authorize="isAuthenticated()">
          <form action="#"
                th:action="@{/logout}"
                method="POST">
            <button class="btn btn-primary" type="submit">Logout</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</nav>;

document.body.insertAdjacentHTML("afterbegin", navbar);