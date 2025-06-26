import React, { useState } from "react";

type HistoryEvent = {
    id: number;
    type: "created" | "deleted";
    taskName: string;
    timestamp: Date;
};

const mockHistory = [
    { id: 1, type: "created", taskName: "Buy groceries", timestamp: new Date().toISOString() },
    { id: 2, type: "deleted", taskName: "Read a book", timestamp: new Date().toISOString() },
];

const Historico: React.FC = () => {
    const [history] = useState<HistoryEvent[]>(
        mockHistory.map(event => ({
            ...event,
            timestamp: new Date(event.timestamp),
        })) as HistoryEvent[]
    );

    return (
        <div
            style={{
                maxWidth: 1400,
                margin: "2rem auto",
                fontFamily: "sans-serif",
                background: "linear-gradient(135deg, #172554 0%, #27272a 5%, #000 100%)",
                color: "#f3f4f6",
                borderRadius: 16,
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                padding: "2rem"
            }}
        >
            <h2 style={{ color: "#dbeafe", marginBottom: "1.5rem" }}>Histórico de Tarefas</h2>
            {history.length === 0 ? (
                <p style={{ color: "#a1a1aa" }}>Nenhuma ação registrada.</p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {history.map((event) => (
                        <li
                            key={event.id}
                            style={{
                                margin: "1rem 0",
                                padding: "1rem",
                                border: "1px solid #334155",
                                borderRadius: 8,
                                background:
                                    event.type === "created"
                                        ? "rgba(34,197,94,0.10)"
                                        : "rgba(239,68,68,0.10)",
                                color: "#f3f4f6",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.10)"
                            }}
                        >
                            <strong style={{ color: event.type === "created" ? "#22c55e" : "#ef4444" }}>
                                {event.type === "created" ? "Criou" : "Deletou"} a tarefa:
                            </strong>{" "}
                            {event.taskName}
                            <div style={{ fontSize: 12, color: "#a1a1aa", marginTop: 4 }}>
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