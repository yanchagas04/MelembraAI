import React, { useState } from "react";

type HistoryEvent = {
    id: number;
    type: "created" | "deleted";
    taskName: string;
    timestamp: Date;
};

const mockHistory: HistoryEvent[] = [
    { id: 1, type: "created", taskName: "Buy groceries", timestamp: new Date() },
    { id: 2, type: "deleted", taskName: "Read a book", timestamp: new Date() },
];

const Historico: React.FC = () => {
    const [history, setHistory] = useState<HistoryEvent[]>(mockHistory);

    return (
        <div style={{ maxWidth: 500, margin: "2rem auto", fontFamily: "sans-serif" }}>
            <h2>Histórico de Tarefas</h2>
            {history.length === 0 ? (
                <p>Nenhuma ação registrada.</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {history.map((event) => (
                        <li
                            key={event.id}
                            style={{
                                margin: "1rem 0",
                                padding: "1rem",
                                border: "1px solid #ddd",
                                borderRadius: 8,
                                background: event.type === "created" ? "#e6ffe6" : "#ffe6e6",
                            }}
                        >
                            <strong>
                                {event.type === "created" ? "Criou" : "Deletou"} a tarefa:
                            </strong>{" "}
                            {event.taskName}
                            <div style={{ fontSize: 12, color: "#888" }}>
                                {event.timestamp.toLocaleString()}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Historico;