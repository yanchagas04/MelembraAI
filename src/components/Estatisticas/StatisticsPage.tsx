import React, { useEffect, useState } from 'react';

type TaskStatus = 'TO_DO' | 'IN_PROGRESS' | 'DONE';
interface Task { status: TaskStatus }
interface TaskStatistics { total: number; toDo: number; inProgress: number; done: number }

const mockTasks: Task[] = [
  { status: 'TO_DO' }, { status: 'IN_PROGRESS' }, { status: 'DONE' },
  { status: 'TO_DO' }, { status: 'IN_PROGRESS' }, { status: 'DONE' }, { status: 'TO_DO' }
];

const StatisticsPage: React.FC = () => {
  const [stats, setStats] = useState<TaskStatistics>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    setTimeout(() => {
      try {
        const total = mockTasks.length;
        const toDo = mockTasks.filter(t => t.status === 'TO_DO').length;
        const inProgress = mockTasks.filter(t => t.status === 'IN_PROGRESS').length;
        const done = mockTasks.filter(t => t.status === 'DONE').length;
        setStats({ total, toDo, inProgress, done });
      } catch {
        setError('Erro ao carregar estatísticas.');
      } finally {
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) return <div style={styles.container}>Carregando...</div>;
  if (error) return <div style={styles.container}>{error}</div>;

  return (
    <div style={styles.container}>
      <h2>Estatísticas de Tarefas</h2>
      <div style={styles.grid}>
        <StatCard label="Total" value={stats?.total} />
        <StatCard label="A Fazer" value={stats?.toDo} />
        <StatCard label="Em Andamento" value={stats?.inProgress} />
        <StatCard label="Concluído" value={stats?.done} />
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value?: number }) => (
  <div style={styles.card}>
    <div>{label}</div>
    <strong>{value}</strong>
  </div>
);

const styles: { [k: string]: React.CSSProperties } = {
  container: { maxWidth: 500, margin: '40px auto', padding: 20, background: '#f9f9f9', borderRadius: 8, textAlign: 'center' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 20 },
  card: { background: '#fff', borderRadius: 8, padding: 16, borderLeft: '4px solid #007bff' }
};

export default StatisticsPage;
