---
title: "Spring Boot 拦截器，过滤器区别"
summary: "Spring Boot 拦截器，过滤器区别？"
date: "Oct 21 2024"
draft: false
tags:
    - Spring Boot
---
在Spring Boot中，拦截器（Interceptor）和过滤器（Filter）都是处理请求的组件，但它们在请求处理的阶段和使用场景上有所不同。以下是它们的主要区别：

1. **定义和实现方式**：
   - **过滤器（Filter）**：基于Java Servlet规范的一部分，由`javax.servlet.Filter`接口定义。过滤器可以拦截请求和响应，但它们不与Spring框架紧密集成。
   - **拦截器（Interceptor）**：是Spring框架提供的一个组件，基于`HandlerInterceptor`接口实现。拦截器与Spring的MVC框架紧密集成，可以访问Spring上下文和依赖注入。

2. **执行时机**：
   - **过滤器（Filter）**：在请求进入Servlet容器后，到达具体的Servlet或Spring MVC之前执行。过滤器可以对请求和响应进行预处理和后处理，但它们在Spring的DispatcherServlet之前执行，因此无法访问Spring的上下文和依赖注入。
   - **拦截器（Interceptor）**：在Spring的DispatcherServlet之后执行，这意味着它们可以在Spring MVC的请求处理过程中的多个点进行拦截，包括请求处理之前、之后以及视图渲染之前。

3. **使用场景**：
   - **过滤器（Filter）**：通常用于处理那些不需要访问Spring上下文的通用任务，如请求日志记录、请求内容的修改、安全性控制（如防止CSRF攻击）等。
   - **拦截器（Interceptor）**：适用于需要访问Spring上下文的场景，如权限检查、事务管理、日志记录等。

4. **配置方式**：
   - **过滤器（Filter）**：可以通过在`web.xml`中配置或使用`@WebFilter`注解来定义。在Spring Boot中，可以通过实现`FilterRegistrationBean`来注册过滤器。
   - **拦截器（Interceptor）**：在Spring Boot中，可以通过实现`HandlerInterceptor`接口并注册到`WebMvcConfigurer`的实现类中来定义和配置拦截器。

5. **处理范围**：
   - **过滤器（Filter）**：可以处理所有进入Servlet容器的请求，包括静态资源和非Spring MVC处理的请求。
   - **拦截器（Interceptor）**：仅处理由Spring MVC处理的请求。

6. **异常处理**：
   - **过滤器（Filter）**：可以在请求处理过程中抛出异常，但这些异常不会被Spring MVC处理。
   - **拦截器（Interceptor）**：可以在请求处理过程中抛出异常，并且这些异常可以被Spring MVC的异常处理器捕获和处理。

总的来说，拦截器提供了更细粒度的控制和与Spring框架的集成，而过滤器则适用于那些不需要访问Spring上下文的通用处理任务。在实际开发中，可以根据具体需求选择使用拦截器或过滤器。
