import React from 'react';

export default function LeaderboardsPage() {
  return (
    <div className="leaderboards">
      <h2>Pengguna Paling Aktif</h2>
      <table>
        <tr>
          <th>Pengguna</th>
          <th>Skor</th>
        </tr>
        <tr className="list-user">
          <td className="leaderboard-user">
            <img src="/avatar.png" alt="avatar" />
            <p>Hope Point</p>
          </td>
          <td>53</td>
        </tr>
      </table>
    </div>
  );
}
