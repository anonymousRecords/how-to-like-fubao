import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import PostListPage from "PostListPage";
import PostPage from "PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostListPage />,
  },
  {
    path: "/post",
    element: <PostPage />,
    children: [
      {
        path: "/post/:id",
        element: <PostPage />,
      },
    ],
  },
]);

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mocks/browser");
  return worker.start({ onUnhandledRequest: "bypass" });
}

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root")!);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>
  );
});
